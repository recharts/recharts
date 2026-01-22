import{r as t,e}from"./iframe-DpxBiwXt.js";import{P as v,a as b}from"./PieChart-DvACpj_E.js";import{C as P}from"./tooltipContext-CxkAlI2d.js";import{T as k}from"./Tooltip-BplPpqBs.js";import{L as x}from"./Legend-Cjhc-YUg.js";import{R as y}from"./RechartsHookInspector-A8kV9_z_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CEEOIjtC.js";import"./arrayEqualityCheck-FXkJUuOg.js";import"./PolarUtils-DdS5KPsI.js";import"./Layer-B_VW6NEu.js";import"./Curve-D7R0OSkI.js";import"./types-BBdfixzL.js";import"./Text-DNJoB5At.js";import"./DOMUtils-DrvvQn8D.js";import"./ReactUtils-Dffr1epF.js";import"./Label-CEkR5yeX.js";import"./ZIndexLayer-D0mBkmdS.js";import"./zIndexSlice-BKKsRI17.js";import"./RechartsWrapper-BjnJrxH9.js";import"./hooks-CjYZQI6e.js";import"./axisSelectors-DxY3Hm_g.js";import"./ActiveShapeUtils-DjjH0_gx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BltJ-RBG.js";import"./useAnimationId-xmRGVEvR.js";import"./Trapezoid-DN2MYT0t.js";import"./Sector-CLle2JPF.js";import"./Symbols-DaC_yNBz.js";import"./RegisterGraphicalItemId-DvA6E3s-.js";import"./SetGraphicalItem-B6m6aNjX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-JCTE_OqU.js";import"./PolarChart-Ddm_chNp.js";import"./chartDataContext-WZeplglC.js";import"./CategoricalChart-DGoypZYk.js";import"./useElementOffset-K-XxmBs3.js";import"./iteratee-Bm9VQgEn.js";import"./Cross-BPD08xqW.js";import"./index-JWi15Uty.js";import"./ChartSizeDimensions-DaeB45KF.js";import"./OffsetShower-BJFCBDNO.js";import"./PlotAreaShower-eORzspIc.js";const D=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],c=["#0088FE","#00C49F","#FFBB28","#FF8042"],L=({active:m,payload:a})=>m&&a&&a.length>0?e.createElement("div",{className:"my-custom-tooltip",style:{border:"solid 1px black",fontSize:"13px",fontWeight:"600",fontFamily:"sans-serif",color:"#111",backgroundColor:"#eee",padding:"5px",borderRadius:"10px"}},a.map(o=>e.createElement("p",{key:o.name},`${o.name} : ${o.value}`)),e.createElement("div",{className:"tooltip-arrow"})):null,Ce={component:v},i={render:m=>{const[a,o]=t.useState(void 0),[f,r]=t.useState(!1),[l,h]=t.useState(D),C=t.useCallback((s,n)=>{o({x:n.clientX-185,y:n.offsetY})},[o]),M=t.useMemo(()=>l.map((s,n)=>e.createElement(P,{key:`cell-${s.name}`,fill:c[n%c.length]})),[l]),g=t.useCallback(()=>{r(!0)},[r]),E=t.useCallback(()=>{r(!1)},[r]);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{h(s=>s.map(n=>({...n,value:Math.round(Math.random()*1e3)})))}},"Change Data"),e.createElement(b,{width:400,height:400,data:l,onMouseMove:C},e.createElement(v,{...m,dataKey:"value",onMouseEnter:g,onMouseLeave:E},M),e.createElement(k,{content:L,position:a,active:f}),e.createElement(x,null),e.createElement(y,null)))},args:{cx:200,cy:200,fill:"#8884d8",outerRadius:80,labelLine:!1}};var p,u,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
