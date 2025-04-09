'use client';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@/app/store/counter/counterSlice';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
    const count = useSelector(
        (state: { counter: Record<string, number> }) => state.counter.value
    );
    const dispatch = useDispatch();
    return (
        <div className=''>
            <Button onClick={() => dispatch(increment())}>Add</Button>
            <Button onClick={() => dispatch(decrement())}>Subtract</Button>
            <div>{count}</div>
        </div>
    );
}
