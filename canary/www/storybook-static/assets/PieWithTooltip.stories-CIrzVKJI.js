import{r as t,e}from"./iframe-CsBbFWpF.js";import{a as v,P as b}from"./PieChart-DijZ-ApQ.js";import{C as P}from"./tooltipContext-BJ3STaWo.js";import{T as k}from"./Tooltip-B8PRtCZT.js";import{L as x}from"./Legend-BwPUQflq.js";import{R as y}from"./RechartsHookInspector-Ce0vrec4.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Di-bRFCz.js";import"./arrayEqualityCheck-jcy1YLjA.js";import"./PolarUtils-DudrDAyL.js";import"./Layer-B5pUJ7d6.js";import"./Curve-BV6casI8.js";import"./types-DZkoNYJ-.js";import"./Text-CXOTFpC0.js";import"./DOMUtils-DCk3Ra7U.js";import"./ReactUtils-B73M-NEp.js";import"./Label-vO0tFBMQ.js";import"./ZIndexLayer-DoHUAHyH.js";import"./zIndexSlice-CXgHVliP.js";import"./RechartsWrapper-M1yD5X0u.js";import"./hooks-51EGl8Fk.js";import"./axisSelectors-C8uaVJja.js";import"./ActiveShapeUtils-Cp7opGs8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CRfJXidx.js";import"./useAnimationId-DQyCpAJd.js";import"./Trapezoid-CqG9LomH.js";import"./Sector-DZ4anR9n.js";import"./Symbols-GutgQl5i.js";import"./RegisterGraphicalItemId-DEKbhPBq.js";import"./SetGraphicalItem-D-yEZ2eQ.js";import"./polarSelectors-DxihoTCI.js";import"./PolarChart-BqcxhDUF.js";import"./chartDataContext-C4MvfWzW.js";import"./CategoricalChart-BoRcIHlb.js";import"./useElementOffset-DKVHg2OE.js";import"./iteratee-DG0CEwld.js";import"./Cross-eYJkkoHv.js";import"./index-30ex7hAw.js";import"./ChartSizeDimensions-BxqurYlH.js";import"./OffsetShower-Cz9yhNvC.js";import"./PlotAreaShower-CYw1ViUZ.js";const D=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],c=["#0088FE","#00C49F","#FFBB28","#FF8042"],L=({active:m,payload:a})=>m&&a&&a.length>0?e.createElement("div",{className:"my-custom-tooltip",style:{border:"solid 1px black",fontSize:"13px",fontWeight:"600",fontFamily:"sans-serif",color:"#111",backgroundColor:"#eee",padding:"5px",borderRadius:"10px"}},a.map(o=>e.createElement("p",{key:o.name},`${o.name} : ${o.value}`)),e.createElement("div",{className:"tooltip-arrow"})):null,he={component:v},i={render:m=>{const[a,o]=t.useState(void 0),[f,r]=t.useState(!1),[l,h]=t.useState(D),C=t.useCallback((s,n)=>{o({x:n.clientX-185,y:n.offsetY})},[o]),M=t.useMemo(()=>l.map((s,n)=>e.createElement(P,{key:`cell-${s.name}`,fill:c[n%c.length]})),[l]),g=t.useCallback(()=>{r(!0)},[r]),E=t.useCallback(()=>{r(!1)},[r]);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{h(s=>s.map(n=>({...n,value:Math.round(Math.random()*1e3)})))}},"Change Data"),e.createElement(b,{width:400,height:400,data:l,onMouseMove:C},e.createElement(v,{...m,dataKey:"value",onMouseEnter:g,onMouseLeave:E},M),e.createElement(k,{content:L,position:a,active:f}),e.createElement(x,null),e.createElement(y,null)))},args:{cx:200,cy:200,fill:"#8884d8",outerRadius:80,labelLine:!1}};var u,p,d;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
