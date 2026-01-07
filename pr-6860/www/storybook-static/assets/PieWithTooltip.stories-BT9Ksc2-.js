import{r as t,e}from"./iframe-VZdOSrkq.js";import{a as v,P as b}from"./PieChart-PvUpAqL6.js";import{C as P}from"./tooltipContext-BX2ila_0.js";import{T as k}from"./Tooltip-CfI2yqob.js";import{L as x}from"./Legend-hM_Y2pNk.js";import{R as y}from"./RechartsHookInspector-MoE0nLDg.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CnCOAE1M.js";import"./arrayEqualityCheck-Ba8aNuDT.js";import"./PolarUtils-CC6VYEjV.js";import"./Layer-BsibGM2g.js";import"./Curve-Drsk9B8o.js";import"./types-pQqJf-MX.js";import"./Text-C2K_oBbR.js";import"./DOMUtils-CnMWRd9H.js";import"./ReactUtils-CxvXJs5p.js";import"./Label-wuhIVgaJ.js";import"./ZIndexLayer-G2n4L0mz.js";import"./zIndexSlice-C3gfI6wW.js";import"./RechartsWrapper-Dvu2t6Ac.js";import"./hooks-5m2MLZXp.js";import"./axisSelectors-BKO4jsPN.js";import"./ActiveShapeUtils-k9tVA3cu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CC7CQlR8.js";import"./useAnimationId-DK5gOqc4.js";import"./Trapezoid-DZdQIPsQ.js";import"./Sector-BFy_SoTX.js";import"./Symbols-C6oyye2I.js";import"./RegisterGraphicalItemId-CqL-lSFz.js";import"./SetGraphicalItem-B3ZhK10N.js";import"./polarSelectors-CmWhc4wZ.js";import"./PolarChart-CH0g1Tem.js";import"./chartDataContext-B6oCj1lT.js";import"./CategoricalChart-Cp_1f-8v.js";import"./useElementOffset-B4L3s4Wg.js";import"./iteratee-CZcmoo0F.js";import"./Cross-BNY_DbJn.js";import"./index-BmO0aGXh.js";import"./ChartSizeDimensions-D3Cff-Ry.js";import"./OffsetShower-kLJdjlLh.js";import"./PlotAreaShower-zycKA3rU.js";const D=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],c=["#0088FE","#00C49F","#FFBB28","#FF8042"],L=({active:m,payload:a})=>m&&a&&a.length>0?e.createElement("div",{className:"my-custom-tooltip",style:{border:"solid 1px black",fontSize:"13px",fontWeight:"600",fontFamily:"sans-serif",color:"#111",backgroundColor:"#eee",padding:"5px",borderRadius:"10px"}},a.map(o=>e.createElement("p",{key:o.name},`${o.name} : ${o.value}`)),e.createElement("div",{className:"tooltip-arrow"})):null,he={component:v},i={render:m=>{const[a,o]=t.useState(void 0),[f,r]=t.useState(!1),[l,h]=t.useState(D),C=t.useCallback((s,n)=>{o({x:n.clientX-185,y:n.offsetY})},[o]),M=t.useMemo(()=>l.map((s,n)=>e.createElement(P,{key:`cell-${s.name}`,fill:c[n%c.length]})),[l]),g=t.useCallback(()=>{r(!0)},[r]),E=t.useCallback(()=>{r(!1)},[r]);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{h(s=>s.map(n=>({...n,value:Math.round(Math.random()*1e3)})))}},"Change Data"),e.createElement(b,{width:400,height:400,data:l,onMouseMove:C},e.createElement(v,{...m,dataKey:"value",onMouseEnter:g,onMouseLeave:E},M),e.createElement(k,{content:L,position:a,active:f}),e.createElement(x,null),e.createElement(y,null)))},args:{cx:200,cy:200,fill:"#8884d8",outerRadius:80,labelLine:!1}};var u,p,d;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
