import{R as e}from"./iframe-Dpjo95BT.js";import{g as d}from"./utils-ePvtT4un.js";import{A as i}from"./AreaChartArgs-UxHyXtq2.js";import{r as X,p as z}from"./Page-Cj8EiXz7.js";import{t as Y}from"./Time-CZh6Vidc.js";import{A as l}from"./AreaChart-DV9qnjT8.js";import{R as m}from"./zIndexSlice-Bz9FHg4X.js";import{X as p}from"./XAxis-BTXqWGnk.js";import{Y as c}from"./YAxis-D506yA8K.js";import{A as n}from"./Area-0N6oFrrm.js";import{T as A}from"./Tooltip-_jWWEhGs.js";import{C as G}from"./CartesianGrid-Douq1iIm.js";import{L as v}from"./Legend-Cl_iyn0Y.js";import{C as j}from"./ComposedChart-BechDuQ5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BpzLbtwc.js";import"./resolveDefaultProps-C9kA-MT8.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DSxvh8IJ.js";import"./throttle-CgrRaOJs.js";import"./index-LdQYXtG7.js";import"./index-B9X1zGtL.js";import"./polarAxisSelectors-DlnF8AFa.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C6Aj8r2L.js";import"./index-B-kkbwvl.js";import"./index-CQjokYOg.js";import"./renderedTicksSlice-DCa6WqoI.js";import"./index-_bw4WA6x.js";import"./fillDefinitions-puythMDx.js";import"./CartesianChart-D0GXIpob.js";import"./ZIndexPortal-1jnT8grk.js";import"./CategoricalChart-EHcc8AGs.js";import"./CartesianAxis-BKOwU02Z.js";import"./Layer-dEC3lxZB.js";import"./Text-8qrIJHOF.js";import"./DOMUtils-DrYchlqm.js";import"./ZIndexLayer-CS37SN-4.js";import"./Label-DulCRYKX.js";import"./types-CB3DqoLS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DJoHLEEy.js";import"./ActivePoints-CqWN2Rf1.js";import"./Dot-CyMu6wKR.js";import"./activeStyles-lY2Wk3Pa.js";import"./useAnimationId-DXZwJd8h.js";import"./dataEntryStyles-0BlaoxRC.js";import"./Symbols-DoRtyuXb.js";import"./symbol-WOMD01oz.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BBgSrgVm.js";import"./getRadiusAndStrokeWidthFromDot-BbnzhDU0.js";import"./ActiveShapeUtils-DlizSa8y.js";import"./Curve-DESeTImr.js";import"./step-CnW6P3zf.js";import"./useEffectiveDataKey-DYwpBPAM.js";import"./useElementOffset-DDmleafX.js";import"./uniqBy-C9-llrOR.js";import"./iteratee-CNDxe9py.js";import"./isArguments-yB-y1yaH.js";import"./Cross-8DFI0rn1.js";import"./Rectangle-C3bNmSLU.js";import"./util-Dxo8gN5i.js";import"./Sector-JUb9w246.js";const et={component:l,docs:{autodocs:!1},argTypes:i},g={render:o=>e.createElement(m,{width:"100%",height:"100%"},e.createElement(l,{...o},e.createElement(G,{strokeDasharray:"3 3"}),e.createElement(c,null),e.createElement(p,{dataKey:"x",type:"number",scale:"time",domain:["auto","auto"]}),e.createElement(n,{type:"monotone",dataKey:"y",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(n,{type:"monotone",dataKey:"z",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),e.createElement(A,{active:!0,defaultIndex:2}),e.createElement(v,null))),args:{...d(i),width:500,height:400,data:Y,margin:{top:10,right:30,left:0,bottom:0}}},y={render:o=>e.createElement(m,{width:"100%",height:"100%"},e.createElement(l,{...o},e.createElement(p,{dataKey:"day"}),e.createElement(c,null),e.createElement(n,{dataKey:"temperature",stroke:"#d82428",fill:"#8884d8"}),e.createElement(A,{defaultIndex:4,active:!0}))),args:{...d(i),width:500,height:400,data:X,margin:{top:10,right:30,left:0,bottom:0}}},B=[{timeHorizon:1,range:[-2.1,12.6]},{timeHorizon:3,range:[1,9.5]},{timeHorizon:5,range:[2,8.5]},{timeHorizon:10,range:[2.9,7.6]},{timeHorizon:15,range:[3.4,7.1]}],h={render:()=>e.createElement(m,{width:"100%",height:"100%"},e.createElement(l,{data:B,width:1e3,height:600,margin:{top:20,right:200,bottom:20,left:20}},e.createElement("defs",null,e.createElement("linearGradient",{id:"fill-gradient",gradientTransform:"rotate(90)"},e.createElement("stop",{offset:"5%",stopColor:"green",stopOpacity:1}),e.createElement("stop",{offset:.86,stopColor:"green",stopOpacity:.1}),e.createElement("stop",{offset:.86,stopColor:"red",stopOpacity:.1}),e.createElement("stop",{offset:"95%",stopColor:"red",stopOpacity:1}))),e.createElement(n,{type:"monotone",dataKey:"range",fill:"url(#fill-gradient)",stroke:"none"}),e.createElement(p,{dataKey:"timeHorizon",type:"number",domain:[1,"dataMax"],axisLine:!1,ticks:[1,3,5,10,15],unit:" yr"}),e.createElement(c,{unit:"%",ticks:[-5,0,5,10,15],domain:[-5,15]}),e.createElement(A,null))),args:{...d(i)}},u={render:o=>{const[a,C]=e.useState("uv");return e.createElement(e.Fragment,null,e.createElement("form",{style:{display:"flex",flexDirection:"column"},onChange:s=>"value"in s.target&&typeof s.target.value=="string"&&C(s.target.value)},e.createElement("label",{htmlFor:"dataKey-uv",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-uv",name:"dataKey",value:"uv",defaultChecked:a==="uv"}),"dataKey=uv"),e.createElement("label",{htmlFor:"dataKey-pv",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-pv",name:"dataKey",value:"pv",defaultChecked:a==="pv"}),"dataKey=pv"),e.createElement("label",{htmlFor:"dataKey-empty",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-empty",name:"dataKey",value:"hidden",defaultChecked:a==="hidden"}),"Hidden")),e.createElement(m,{width:"100%"},e.createElement(j,{...o},e.createElement(v,null),e.createElement(p,{dataKey:"name"}),e.createElement(c,null),e.createElement(n,{dataKey:a,label:{fill:"green"},dot:!0}),e.createElement(A,null))))},args:{...d(i),width:500,height:400,data:z,margin:{top:10,right:30,left:0,bottom:0}}},f={render:o=>{const[a,C]=e.useState([]),s=({dataKey:r})=>{typeof r=="string"&&C(t=>t.includes(r)?t.filter(K=>K!==r):[...t,r])};return e.createElement(m,{width:"100%",height:"100%"},e.createElement(l,{...o,stackOffset:"silhouette"},e.createElement(G,{strokeDasharray:"3 3"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null),e.createElement(n,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",strokeWidth:3,fill:"rgba(136,132,216,0.47)",hide:a.includes("uv"),animationBegin:0}),e.createElement(n,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",strokeWidth:3,fill:"rgba(130,202,157,0.47)",hide:a.includes("pv"),animationBegin:300}),e.createElement(n,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",strokeWidth:3,fill:"rgba(255,198,88,0.47)",hide:a.includes("amt"),animationBegin:600}),e.createElement(v,{content:({payload:r})=>e.createElement("ul",{style:{display:"flex",flexDirection:"row",listStyleType:"none",padding:0}},r==null?void 0:r.map((t,K)=>e.createElement("li",{key:`item-${K}`,style:{color:t.color}},e.createElement("button",{type:"button",onClick:()=>s(t),style:{background:"none",border:t.inactive?"3px solid #ccc":`3px solid ${t.color}`,borderRadius:"20%",padding:"10px",cursor:"pointer",opacity:typeof t.dataKey=="string"&&a.includes(t.dataKey)?.2:1}},t.value))))})))},args:{...d(i),width:500,height:400,data:z,margin:{top:10,right:30,left:0,bottom:0}}},tt=["StackedAreaChart","RangedAreaChart","RangedAreaChartWithGradient","WithChangingDataKeyAndAnimations","StackedAreaWithCustomLegend"];var k,E,x;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
