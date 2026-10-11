import{R as e}from"./iframe-yZAwGisL.js";import{g as d}from"./utils-ePvtT4un.js";import{A as i}from"./AreaChartArgs-UxHyXtq2.js";import{r as X,p as z}from"./Page-Cj8EiXz7.js";import{t as Y}from"./Time-CZh6Vidc.js";import{A as l}from"./AreaChart-SZ4TiZKQ.js";import{R as m}from"./zIndexSlice-vFKh36uD.js";import{X as p}from"./XAxis-6ip0YWM4.js";import{Y as c}from"./YAxis-GuJUd4De.js";import{A as n}from"./Area-DHoHd1wt.js";import{T as A}from"./Tooltip-GIKsa0Rr.js";import{C as G}from"./CartesianGrid-Ccontk-L.js";import{L as v}from"./Legend-zigVBtRG.js";import{C as j}from"./ComposedChart-CsZfHT2l.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BFLcsvAk.js";import"./resolveDefaultProps-CpOUXIWy.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CjnrZFGM.js";import"./throttle-IYJcPlE6.js";import"./index-Bt1GAe6_.js";import"./index-BTDWI4JQ.js";import"./isWellBehavedNumber-BKIZfdbp.js";import"./d3-scale-BEY7rAMO.js";import"./index-Ds4u8dOy.js";import"./index-DoEg_2wF.js";import"./renderedTicksSlice-C_b5HfBN.js";import"./index-CX6Jn8F9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CRAui4vE.js";import"./chartDataContext-x9qaucVY.js";import"./CategoricalChart-BgiEDQst.js";import"./CartesianAxis-BfrfszGM.js";import"./Layer-CD9hCFBU.js";import"./Text-DCZHKK2-.js";import"./pageBackground-CPn-UXC2.js";import"./useId-fCPF8DLN.js";import"./useBackwardsCompatibleTheme-BEC80JP4.js";import"./Label-DlvpoYCy.js";import"./ZIndexLayer-jYmr7Pld.js";import"./types-BDgd-zTs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-CKbiEpkz.js";import"./useAnimationId-D2NnZ8n8.js";import"./dataEntryStyles-heCtjgf8.js";import"./ActivePoints-X-te6dVp.js";import"./Dot-B6Z_ObGU.js";import"./GraphicalItemClipPath-CTekJVv_.js";import"./SetGraphicalItem-BAzuu_AW.js";import"./getRadiusAndStrokeWidthFromDot-C8mMcy-b.js";import"./ActiveShapeUtils-Bka3d7Ur.js";import"./Curve-DFleLHdr.js";import"./step-6P7iPqmC.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-C_H0JivC.js";import"./useElementOffset-DXDe4gtV.js";import"./uniqBy-Dx2h-_lS.js";import"./iteratee-Boanqjnt.js";import"./Cross-CMMpBrg6.js";import"./Rectangle-Dv7__Cpn.js";import"./util-Dxo8gN5i.js";import"./Sector-CFtj1kdJ.js";import"./Symbols-CEACwPi4.js";import"./symbol-DNKzqBP-.js";const et={component:l,docs:{autodocs:!1},argTypes:i},g={render:o=>e.createElement(m,{width:"100%",height:"100%"},e.createElement(l,{...o},e.createElement(G,{strokeDasharray:"3 3"}),e.createElement(c,null),e.createElement(p,{dataKey:"x",type:"number",scale:"time",domain:["auto","auto"]}),e.createElement(n,{type:"monotone",dataKey:"y",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(n,{type:"monotone",dataKey:"z",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),e.createElement(A,{active:!0,defaultIndex:2}),e.createElement(v,null))),args:{...d(i),width:500,height:400,data:Y,margin:{top:10,right:30,left:0,bottom:0}}},y={render:o=>e.createElement(m,{width:"100%",height:"100%"},e.createElement(l,{...o},e.createElement(p,{dataKey:"day"}),e.createElement(c,null),e.createElement(n,{dataKey:"temperature",stroke:"#d82428",fill:"#8884d8"}),e.createElement(A,{defaultIndex:4,active:!0}))),args:{...d(i),width:500,height:400,data:X,margin:{top:10,right:30,left:0,bottom:0}}},B=[{timeHorizon:1,range:[-2.1,12.6]},{timeHorizon:3,range:[1,9.5]},{timeHorizon:5,range:[2,8.5]},{timeHorizon:10,range:[2.9,7.6]},{timeHorizon:15,range:[3.4,7.1]}],h={render:()=>e.createElement(m,{width:"100%",height:"100%"},e.createElement(l,{data:B,width:1e3,height:600,margin:{top:20,right:200,bottom:20,left:20}},e.createElement("defs",null,e.createElement("linearGradient",{id:"fill-gradient",gradientTransform:"rotate(90)"},e.createElement("stop",{offset:"5%",stopColor:"green",stopOpacity:1}),e.createElement("stop",{offset:.86,stopColor:"green",stopOpacity:.1}),e.createElement("stop",{offset:.86,stopColor:"red",stopOpacity:.1}),e.createElement("stop",{offset:"95%",stopColor:"red",stopOpacity:1}))),e.createElement(n,{type:"monotone",dataKey:"range",fill:"url(#fill-gradient)",stroke:"none"}),e.createElement(p,{dataKey:"timeHorizon",type:"number",domain:[1,"dataMax"],axisLine:!1,ticks:[1,3,5,10,15],unit:" yr"}),e.createElement(c,{unit:"%",ticks:[-5,0,5,10,15],domain:[-5,15]}),e.createElement(A,null))),args:{...d(i)}},u={render:o=>{const[a,C]=e.useState("uv");return e.createElement(e.Fragment,null,e.createElement("form",{style:{display:"flex",flexDirection:"column"},onChange:s=>"value"in s.target&&typeof s.target.value=="string"&&C(s.target.value)},e.createElement("label",{htmlFor:"dataKey-uv",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-uv",name:"dataKey",value:"uv",defaultChecked:a==="uv"}),"dataKey=uv"),e.createElement("label",{htmlFor:"dataKey-pv",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-pv",name:"dataKey",value:"pv",defaultChecked:a==="pv"}),"dataKey=pv"),e.createElement("label",{htmlFor:"dataKey-empty",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-empty",name:"dataKey",value:"hidden",defaultChecked:a==="hidden"}),"Hidden")),e.createElement(m,{width:"100%"},e.createElement(j,{...o},e.createElement(v,null),e.createElement(p,{dataKey:"name"}),e.createElement(c,null),e.createElement(n,{dataKey:a,label:{fill:"green"},dot:!0}),e.createElement(A,null))))},args:{...d(i),width:500,height:400,data:z,margin:{top:10,right:30,left:0,bottom:0}}},f={render:o=>{const[a,C]=e.useState([]),s=({dataKey:r})=>{typeof r=="string"&&C(t=>t.includes(r)?t.filter(K=>K!==r):[...t,r])};return e.createElement(m,{width:"100%",height:"100%"},e.createElement(l,{...o,stackOffset:"silhouette"},e.createElement(G,{strokeDasharray:"3 3"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null),e.createElement(n,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",strokeWidth:3,fill:"rgba(136,132,216,0.47)",hide:a.includes("uv"),animationBegin:0}),e.createElement(n,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",strokeWidth:3,fill:"rgba(130,202,157,0.47)",hide:a.includes("pv"),animationBegin:300}),e.createElement(n,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",strokeWidth:3,fill:"rgba(255,198,88,0.47)",hide:a.includes("amt"),animationBegin:600}),e.createElement(v,{content:({payload:r})=>e.createElement("ul",{style:{display:"flex",flexDirection:"row",listStyleType:"none",padding:0}},r==null?void 0:r.map((t,K)=>e.createElement("li",{key:`item-${K}`,style:{color:t.color}},e.createElement("button",{type:"button",onClick:()=>s(t),style:{background:"none",border:t.inactive?"3px solid #ccc":`3px solid ${t.color}`,borderRadius:"20%",padding:"10px",cursor:"pointer",opacity:typeof t.dataKey=="string"&&a.includes(t.dataKey)?.2:1}},t.value))))})))},args:{...d(i),width:500,height:400,data:z,margin:{top:10,right:30,left:0,bottom:0}}},tt=["StackedAreaChart","RangedAreaChart","RangedAreaChartWithGradient","WithChangingDataKeyAndAnimations","StackedAreaWithCustomLegend"];var k,E,x;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis />
          <XAxis dataKey="x" type="number" scale="time" domain={['auto', 'auto']} />
          <Area type="monotone" dataKey="y" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="z" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Tooltip active defaultIndex={2} />
          <Legend />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: timeData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...(x=(E=g.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var b,w,D;y.parameters={...y.parameters,docs:{...(b=y.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <XAxis dataKey="day" />
          <YAxis />
          <Area dataKey="temperature" stroke="#d82428" fill="#8884d8" />
          <Tooltip defaultIndex={4} active />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: rangeData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...(D=(w=y.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var R,I,S;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={rangeData2} width={1000} height={600} margin={{
        top: 20,
        right: 200,
        bottom: 20,
        left: 20
      }}>
          <defs>
            <linearGradient id="fill-gradient" gradientTransform="rotate(90)">
              <stop offset="5%" stopColor="green" stopOpacity={1} />
              <stop offset={0.86} stopColor="green" stopOpacity={0.1} />
              <stop offset={0.86} stopColor="red" stopOpacity={0.1} />
              <stop offset="95%" stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="range" fill="url(#fill-gradient)" stroke="none" />
          <XAxis dataKey="timeHorizon" type="number" domain={[1, 'dataMax']} axisLine={false} ticks={[1, 3, 5, 10, 15]} unit=" yr" />
          <YAxis unit="%" ticks={[-5, 0, 5, 10, 15]} domain={[-5, 15]} />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs)
  }
}`,...(S=(I=h.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var O,T,F;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [dataKey, setDataKey] = React.useState('uv');
    return <>
        <form style={{
        display: 'flex',
        flexDirection: 'column'
      }} onChange={e => 'value' in e.target && typeof e.target.value === 'string' && setDataKey(e.target.value)}>
          <label htmlFor="dataKey-uv" style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
            <input type="radio" id="dataKey-uv" name="dataKey" value="uv" defaultChecked={dataKey === 'uv'} />
            dataKey=uv
          </label>
          <label htmlFor="dataKey-pv" style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
            <input type="radio" id="dataKey-pv" name="dataKey" value="pv" defaultChecked={dataKey === 'pv'} />
            dataKey=pv
          </label>
          <label htmlFor="dataKey-empty" style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
            <input type="radio" id="dataKey-empty" name="dataKey" value="hidden" defaultChecked={dataKey === 'hidden'} />
            Hidden
          </label>
        </form>
        <ResponsiveContainer width="100%">
          <ComposedChart {...args}>
            <Legend />
            <XAxis dataKey="name" />
            <YAxis />
            <Area dataKey={dataKey} label={{
            fill: 'green'
          }} dot />
            <Tooltip />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: pageData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...(F=(T=u.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var H,W,L;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  // Reproducing https://github.com/recharts/recharts/issues/5992
  render: (args: Args) => {
    const [hiddenItems, setHiddenItems] = React.useState<ReadonlyArray<string>>([]);
    const handleClick = ({
      dataKey
    }: LegendPayload) => {
      if (typeof dataKey !== 'string') {
        return;
      }
      setHiddenItems(prev => prev.includes(dataKey) ? prev.filter(key => key !== dataKey) : [...prev, dataKey]);
    };
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args} stackOffset="silhouette">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" strokeWidth={3} fill="rgba(136,132,216,0.47)" hide={hiddenItems.includes('uv')} animationBegin={0} />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" strokeWidth={3} fill="rgba(130,202,157,0.47)" hide={hiddenItems.includes('pv')} animationBegin={300} />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" strokeWidth={3} fill="rgba(255,198,88,0.47)" hide={hiddenItems.includes('amt')} animationBegin={600} />
          <Legend content={({
          payload
        }) => <ul style={{
          display: 'flex',
          flexDirection: 'row',
          listStyleType: 'none',
          padding: 0
        }}>
                {payload?.map((entry, index) => <li key={\`item-\${index}\`} style={{
            color: entry.color
          }}>
                    <button type="button" onClick={() => handleClick(entry)} style={{
              background: 'none',
              border: entry.inactive ? '3px solid #ccc' : \`3px solid \${entry.color}\`,
              borderRadius: '20%',
              padding: '10px',
              cursor: 'pointer',
              opacity: typeof entry.dataKey === 'string' && hiddenItems.includes(entry.dataKey) ? 0.2 : 1
            }}>
                      {entry.value}
                    </button>
                  </li>)}
              </ul>} />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs),
    width: 500,
    height: 400,
    data: pageData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }
}`,...(L=(W=f.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};export{y as RangedAreaChart,h as RangedAreaChartWithGradient,g as StackedAreaChart,f as StackedAreaWithCustomLegend,u as WithChangingDataKeyAndAnimations,tt as __namedExportsOrder,et as default};
