import{r as t,e}from"./iframe-Bnj2hik-.js";import{P as v,a as b}from"./PieChart-C55_Fdrw.js";import{C as P}from"./tooltipContext-C91HkTF6.js";import{T as k}from"./Tooltip-5z-9ouH6.js";import{L as x}from"./Legend-Bb-V3Rnn.js";import{R as y}from"./RechartsHookInspector-C_AeFs2E.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CPe3qGY9.js";import"./arrayEqualityCheck-CvUuuvKy.js";import"./PolarUtils-DdS5KPsI.js";import"./Layer-CTa4OydD.js";import"./Curve-DmusCa7H.js";import"./types-BDwtxhLH.js";import"./Text-CZ97J0qN.js";import"./DOMUtils-JoNXkoCv.js";import"./ReactUtils-Df0RtsJl.js";import"./Label-CGAHaC0Q.js";import"./ZIndexLayer-AOmKG0iq.js";import"./zIndexSlice-CXHmHRtI.js";import"./RechartsWrapper-B0Rp0hND.js";import"./hooks-Bya6Ssf9.js";import"./axisSelectors-DFI1wFeY.js";import"./ActiveShapeUtils--kZjLfXB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BBR3U7HU.js";import"./useAnimationId-APU2l9w6.js";import"./Trapezoid-CztQNmuh.js";import"./Sector-DCA192jN.js";import"./Symbols-DhIIpi5f.js";import"./RegisterGraphicalItemId-DiJF1Hfp.js";import"./SetGraphicalItem-DzQbpKu1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-wnc8ZR9y.js";import"./PolarChart-BFJqQ0Cp.js";import"./chartDataContext-DBEZcAkK.js";import"./CategoricalChart-6PDUcg0C.js";import"./useElementOffset-Cs4N1beZ.js";import"./iteratee-hXzJyvq3.js";import"./Cross-g1_l6O_A.js";import"./index-BXTK0ASf.js";import"./ChartSizeDimensions-fd2MIhjM.js";import"./OffsetShower-h-8uohRc.js";import"./PlotAreaShower-BfrbL-Yz.js";const D=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],c=["#0088FE","#00C49F","#FFBB28","#FF8042"],L=({active:m,payload:a})=>m&&a&&a.length>0?e.createElement("div",{className:"my-custom-tooltip",style:{border:"solid 1px black",fontSize:"13px",fontWeight:"600",fontFamily:"sans-serif",color:"#111",backgroundColor:"#eee",padding:"5px",borderRadius:"10px"}},a.map(o=>e.createElement("p",{key:o.name},`${o.name} : ${o.value}`)),e.createElement("div",{className:"tooltip-arrow"})):null,Ce={component:v},i={render:m=>{const[a,o]=t.useState(void 0),[f,r]=t.useState(!1),[l,h]=t.useState(D),C=t.useCallback((s,n)=>{o({x:n.clientX-185,y:n.offsetY})},[o]),M=t.useMemo(()=>l.map((s,n)=>e.createElement(P,{key:`cell-${s.name}`,fill:c[n%c.length]})),[l]),g=t.useCallback(()=>{r(!0)},[r]),E=t.useCallback(()=>{r(!1)},[r]);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{h(s=>s.map(n=>({...n,value:Math.round(Math.random()*1e3)})))}},"Change Data"),e.createElement(b,{width:400,height:400,data:l,onMouseMove:C},e.createElement(v,{...m,dataKey:"value",onMouseEnter:g,onMouseLeave:E},M),e.createElement(k,{content:L,position:a,active:f}),e.createElement(x,null),e.createElement(y,null)))},args:{cx:200,cy:200,fill:"#8884d8",outerRadius:80,labelLine:!1}};var p,u,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Me=["PieWithTooltip"];export{i as PieWithTooltip,Me as __namedExportsOrder,Ce as default};
