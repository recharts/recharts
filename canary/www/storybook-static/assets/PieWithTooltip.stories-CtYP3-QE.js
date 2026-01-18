import{r as t,e}from"./iframe-DZy4Dead.js";import{P as v,a as b}from"./PieChart-CQclOxIG.js";import{C as P}from"./tooltipContext-BUOejfSR.js";import{T as k}from"./Tooltip-DkTYviFG.js";import{L as x}from"./Legend-D7rMYQN7.js";import{R as y}from"./RechartsHookInspector-BQ2LFFE8.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bf5GaSqV.js";import"./arrayEqualityCheck-ApBChTfQ.js";import"./PolarUtils-Dc-YJkTz.js";import"./Layer-Bpoel1Lp.js";import"./Curve-ChmxEyvD.js";import"./types-BfEpf9p_.js";import"./Text-68IXtrlK.js";import"./DOMUtils-DwLev0Y8.js";import"./ReactUtils-MfSKnK6Q.js";import"./Label-BnGgD6KR.js";import"./ZIndexLayer-DncsytRr.js";import"./zIndexSlice-BHURSyYA.js";import"./RechartsWrapper-nPRv-TTN.js";import"./hooks-ajKNzoip.js";import"./axisSelectors-CNnm75NT.js";import"./ActiveShapeUtils-BmYdORD-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DS0sw2g4.js";import"./useAnimationId-C4mX0K92.js";import"./Trapezoid-C-7zXkUX.js";import"./Sector-Cjw5cIeP.js";import"./Symbols-BE9qwwFU.js";import"./RegisterGraphicalItemId-DFrBVe2X.js";import"./SetGraphicalItem-6vLNF4l0.js";import"./polarSelectors-DZR-M7n6.js";import"./PolarChart-BI1VEbaA.js";import"./chartDataContext-C_SJIf2I.js";import"./CategoricalChart-Da7z_ebg.js";import"./useElementOffset-VabGtOpj.js";import"./iteratee-DGxwmvkZ.js";import"./Cross-COQhDoU6.js";import"./index-SrSy7NGQ.js";import"./ChartSizeDimensions-DagnIVtO.js";import"./OffsetShower-C8_o4Gkp.js";import"./PlotAreaShower-CJCyQCMM.js";const D=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],c=["#0088FE","#00C49F","#FFBB28","#FF8042"],L=({active:m,payload:a})=>m&&a&&a.length>0?e.createElement("div",{className:"my-custom-tooltip",style:{border:"solid 1px black",fontSize:"13px",fontWeight:"600",fontFamily:"sans-serif",color:"#111",backgroundColor:"#eee",padding:"5px",borderRadius:"10px"}},a.map(o=>e.createElement("p",{key:o.name},`${o.name} : ${o.value}`)),e.createElement("div",{className:"tooltip-arrow"})):null,he={component:v},i={render:m=>{const[a,o]=t.useState(void 0),[f,r]=t.useState(!1),[l,h]=t.useState(D),C=t.useCallback((s,n)=>{o({x:n.clientX-185,y:n.offsetY})},[o]),M=t.useMemo(()=>l.map((s,n)=>e.createElement(P,{key:`cell-${s.name}`,fill:c[n%c.length]})),[l]),g=t.useCallback(()=>{r(!0)},[r]),E=t.useCallback(()=>{r(!1)},[r]);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{h(s=>s.map(n=>({...n,value:Math.round(Math.random()*1e3)})))}},"Change Data"),e.createElement(b,{width:400,height:400,data:l,onMouseMove:C},e.createElement(v,{...m,dataKey:"value",onMouseEnter:g,onMouseLeave:E},M),e.createElement(k,{content:L,position:a,active:f}),e.createElement(x,null),e.createElement(y,null)))},args:{cx:200,cy:200,fill:"#8884d8",outerRadius:80,labelLine:!1}};var u,p,d;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
