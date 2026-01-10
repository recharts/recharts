import{r as t,e}from"./iframe-C2m-yPM5.js";import{a as v,P as b}from"./PieChart-CkPI-yZ1.js";import{C as P}from"./tooltipContext-Dk1JFYuD.js";import{T as k}from"./Tooltip-CASLOoZ8.js";import{L as x}from"./Legend-Bl5gozJt.js";import{R as y}from"./RechartsHookInspector-hZPAuXLN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BmyS9k2s.js";import"./arrayEqualityCheck-TbGkdOW0.js";import"./PolarUtils-CURfmLFn.js";import"./Layer-Iud-sCq9.js";import"./Curve-Bma3Kx5X.js";import"./types-8dUwYk5q.js";import"./Text-DUKp4QGC.js";import"./DOMUtils-CU85nTnD.js";import"./ReactUtils-DmzHw7gD.js";import"./Label-BXoaurZ0.js";import"./ZIndexLayer-Cl-H5N7h.js";import"./zIndexSlice-C6669BzF.js";import"./RechartsWrapper-Cw8RxtHF.js";import"./hooks-DAeXdWPb.js";import"./axisSelectors-DcRH2ohT.js";import"./ActiveShapeUtils-BOZBV2Pi.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQHai8ZT.js";import"./useAnimationId-Du8Fxdxx.js";import"./Trapezoid-CwALKVJk.js";import"./Sector-DFUU7h0Y.js";import"./Symbols-vGEzJ5HY.js";import"./RegisterGraphicalItemId-DCftStFv.js";import"./SetGraphicalItem-qvQ4SGUj.js";import"./polarSelectors-DKpHX5UX.js";import"./PolarChart-BsZI1VWN.js";import"./chartDataContext-BYudZTMM.js";import"./CategoricalChart-DyutkFbX.js";import"./useElementOffset-CEtPZLws.js";import"./iteratee-C4HdVpvy.js";import"./Cross-C4JN4moc.js";import"./index-Dd7KOolC.js";import"./ChartSizeDimensions-DjDyxBi1.js";import"./OffsetShower-DXH-cEhk.js";import"./PlotAreaShower-lLRwtmjO.js";const D=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],c=["#0088FE","#00C49F","#FFBB28","#FF8042"],L=({active:m,payload:a})=>m&&a&&a.length>0?e.createElement("div",{className:"my-custom-tooltip",style:{border:"solid 1px black",fontSize:"13px",fontWeight:"600",fontFamily:"sans-serif",color:"#111",backgroundColor:"#eee",padding:"5px",borderRadius:"10px"}},a.map(o=>e.createElement("p",{key:o.name},`${o.name} : ${o.value}`)),e.createElement("div",{className:"tooltip-arrow"})):null,he={component:v},i={render:m=>{const[a,o]=t.useState(void 0),[f,r]=t.useState(!1),[l,h]=t.useState(D),C=t.useCallback((s,n)=>{o({x:n.clientX-185,y:n.offsetY})},[o]),M=t.useMemo(()=>l.map((s,n)=>e.createElement(P,{key:`cell-${s.name}`,fill:c[n%c.length]})),[l]),g=t.useCallback(()=>{r(!0)},[r]),E=t.useCallback(()=>{r(!1)},[r]);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{h(s=>s.map(n=>({...n,value:Math.round(Math.random()*1e3)})))}},"Change Data"),e.createElement(b,{width:400,height:400,data:l,onMouseMove:C},e.createElement(v,{...m,dataKey:"value",onMouseEnter:g,onMouseLeave:E},M),e.createElement(k,{content:L,position:a,active:f}),e.createElement(x,null),e.createElement(y,null)))},args:{cx:200,cy:200,fill:"#8884d8",outerRadius:80,labelLine:!1}};var u,p,d;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [ttPos, setTtPos] = useState<Coordinate | undefined>(undefined);
    const [active, setActive] = useState(false);
    const [randomData, setRandomData] = useState(data);
    const onMouseMove = useCallback((_: unknown, event: MouseEvent) => {
      // follow the mouse and adjust for some offset
      setTtPos({
        x: event.clientX - 185,
        y: event.offsetY
      });
    }, [setTtPos]);
    const cells = useMemo(() => randomData.map((value: DataPoint, index: number) => <Cell key={\`cell-\${value.name}\`} fill={COLORS[index % COLORS.length]} />), [randomData]);
    const onMouseEnter = useCallback(() => {
      setActive(true);
    }, [setActive]);
    const onMouseLeave = useCallback(() => {
      setActive(false);
    }, [setActive]);
    return <>
        <button type="button" onClick={() => {
        setRandomData(old => old.map(d => ({
          ...d,
          value: Math.round(Math.random() * 1000)
        })));
      }}>
          Change Data
        </button>
        <PieChart width={400} height={400} data={randomData}
      // @ts-expect-error recharts needs more specific type for the event
      onMouseMove={onMouseMove}>
          <Pie {...args} dataKey="value" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {cells}
          </Pie>
          <Tooltip content={CustomContent} position={ttPos} active={active} />
          <Legend />
          <RechartsHookInspector />
        </PieChart>
      </>;
  },
  args: {
    cx: 200,
    cy: 200,
    fill: '#8884d8',
    outerRadius: 80,
    labelLine: false
  }
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const Ce=["PieWithTooltip"];export{i as PieWithTooltip,Ce as __namedExportsOrder,he as default};
