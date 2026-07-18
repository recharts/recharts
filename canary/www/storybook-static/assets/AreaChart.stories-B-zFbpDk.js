import{R as e}from"./iframe-Bv6Dcd9T.js";import{g as d}from"./utils-ePvtT4un.js";import{A as n}from"./AreaChartArgs-BLkrYdEu.js";import{r as X,p as z}from"./Page-Cj8EiXz7.js";import{t as Y}from"./Time-CZh6Vidc.js";import{A as l}from"./AreaChart-CqH7SRu9.js";import{R as m}from"./zIndexSlice-DGhXPr-9.js";import{X as p}from"./XAxis-CSpcOKY2.js";import{Y as c}from"./YAxis-DHQaIYZw.js";import{A as o}from"./Area-C9QfIHRy.js";import{T as A}from"./Tooltip-CYnE240g.js";import{C as G}from"./CartesianGrid-AKWKW_lS.js";import{L as v}from"./Legend-A0cX5XEa.js";import{C as j}from"./ComposedChart-C2bRBn5w.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DTS_6Eoq.js";import"./index-DdiL_HAM.js";import"./index-DzmElQg1.js";import"./index-CcYReNCh.js";import"./index-CxI2Eqca.js";import"./throttle-BcQ01sX8.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CJ-EtdQM.js";import"./axisSelectors-BcVMUp1z.js";import"./resolveDefaultProps-D_NqfWCM.js";import"./isWellBehavedNumber-CU7VWJn9.js";import"./d3-scale-CClsGt0Z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DBwo_mBR.js";import"./chartDataContext-BjtAcLZf.js";import"./CategoricalChart-BwO0IaNH.js";import"./CartesianAxis-COkD_qks.js";import"./Layer-DlkJXe1G.js";import"./Text-00C33NA5.js";import"./DOMUtils-C-FPV1O8.js";import"./Label-CQaeTHfg.js";import"./ZIndexLayer-DxBey86b.js";import"./types-CAucql9k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-xeFS2cCQ.js";import"./useAnimationId-K5YFgJBV.js";import"./ActivePoints-DNi94Mhe.js";import"./Dot-BE-61l3v.js";import"./RegisterGraphicalItemId-9ZN-jgk_.js";import"./GraphicalItemClipPath-BS-sqKFj.js";import"./SetGraphicalItem-BQ96Q1Zd.js";import"./getRadiusAndStrokeWidthFromDot-BICVUXTz.js";import"./ActiveShapeUtils-BPmEcXgb.js";import"./Curve-DpXmJzZj.js";import"./step-CRpvhJpW.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DtfFeKs3.js";import"./useElementOffset-DCBd45Il.js";import"./uniqBy-BjtflDCk.js";import"./iteratee-BrcS1bci.js";import"./Cross-BWGMhy9D.js";import"./Rectangle-CtFCyLS0.js";import"./util-Dxo8gN5i.js";import"./Sector-CUkcaSYD.js";import"./Symbols-B944ltIA.js";import"./symbol-BDYSoGh9.js";const Qe={component:l,docs:{autodocs:!1},argTypes:n},g={render:i=>e.createElement(m,{width:"100%",height:"100%"},e.createElement(l,{...i},e.createElement(G,{strokeDasharray:"3 3"}),e.createElement(c,null),e.createElement(p,{dataKey:"x",type:"number",scale:"time",domain:["auto","auto"]}),e.createElement(o,{type:"monotone",dataKey:"y",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(o,{type:"monotone",dataKey:"z",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),e.createElement(A,{active:!0,defaultIndex:2}),e.createElement(v,null))),args:{...d(n),width:500,height:400,data:Y,margin:{top:10,right:30,left:0,bottom:0}}},y={render:i=>e.createElement(m,{width:"100%",height:"100%"},e.createElement(l,{...i},e.createElement(p,{dataKey:"day"}),e.createElement(c,null),e.createElement(o,{dataKey:"temperature",stroke:"#d82428",fill:"#8884d8"}),e.createElement(A,{defaultIndex:4,active:!0}))),args:{...d(n),width:500,height:400,data:X,margin:{top:10,right:30,left:0,bottom:0}}},B=[{timeHorizon:1,range:[-2.1,12.6]},{timeHorizon:3,range:[1,9.5]},{timeHorizon:5,range:[2,8.5]},{timeHorizon:10,range:[2.9,7.6]},{timeHorizon:15,range:[3.4,7.1]}],h={render:()=>e.createElement(m,{width:"100%",height:"100%"},e.createElement(l,{data:B,width:1e3,height:600,margin:{top:20,right:200,bottom:20,left:20}},e.createElement("defs",null,e.createElement("linearGradient",{id:"fill-gradient",gradientTransform:"rotate(90)"},e.createElement("stop",{offset:"5%",stopColor:"green",stopOpacity:1}),e.createElement("stop",{offset:.86,stopColor:"green",stopOpacity:.1}),e.createElement("stop",{offset:.86,stopColor:"red",stopOpacity:.1}),e.createElement("stop",{offset:"95%",stopColor:"red",stopOpacity:1}))),e.createElement(o,{type:"monotone",dataKey:"range",fill:"url(#fill-gradient)",stroke:"none"}),e.createElement(p,{dataKey:"timeHorizon",type:"number",domain:[1,"dataMax"],axisLine:!1,ticks:[1,3,5,10,15],unit:" yr"}),e.createElement(c,{unit:"%",ticks:[-5,0,5,10,15],domain:[-5,15]}),e.createElement(A,null))),args:{...d(n)}},u={render:i=>{const[a,C]=e.useState("uv");return e.createElement(e.Fragment,null,e.createElement("form",{style:{display:"flex",flexDirection:"column"},onChange:s=>"value"in s.target&&typeof s.target.value=="string"&&C(s.target.value)},e.createElement("label",{htmlFor:"dataKey-uv",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-uv",name:"dataKey",value:"uv",defaultChecked:a==="uv"}),"dataKey=uv"),e.createElement("label",{htmlFor:"dataKey-pv",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-pv",name:"dataKey",value:"pv",defaultChecked:a==="pv"}),"dataKey=pv"),e.createElement("label",{htmlFor:"dataKey-empty",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-empty",name:"dataKey",value:"hidden",defaultChecked:a==="hidden"}),"Hidden")),e.createElement(m,{width:"100%"},e.createElement(j,{...i},e.createElement(v,null),e.createElement(p,{dataKey:"name"}),e.createElement(c,null),e.createElement(o,{dataKey:a,label:{fill:"green"},dot:!0}),e.createElement(A,null))))},args:{...d(n),width:500,height:400,data:z,margin:{top:10,right:30,left:0,bottom:0}}},f={render:i=>{const[a,C]=e.useState([]),s=({dataKey:r})=>{typeof r=="string"&&C(t=>t.includes(r)?t.filter(K=>K!==r):[...t,r])};return e.createElement(m,{width:"100%",height:"100%"},e.createElement(l,{...i,stackOffset:"silhouette"},e.createElement(G,{strokeDasharray:"3 3"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null),e.createElement(o,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",strokeWidth:3,fill:"rgba(136,132,216,0.47)",hide:a.includes("uv"),animationBegin:0}),e.createElement(o,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",strokeWidth:3,fill:"rgba(130,202,157,0.47)",hide:a.includes("pv"),animationBegin:300}),e.createElement(o,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",strokeWidth:3,fill:"rgba(255,198,88,0.47)",hide:a.includes("amt"),animationBegin:600}),e.createElement(v,{content:({payload:r})=>e.createElement("ul",{style:{display:"flex",flexDirection:"row",listStyleType:"none",padding:0}},r==null?void 0:r.map((t,K)=>e.createElement("li",{key:`item-${K}`,style:{color:t.color}},e.createElement("button",{type:"button",onClick:()=>s(t),style:{background:"none",border:t.inactive?"3px solid #ccc":`3px solid ${t.color}`,borderRadius:"20%",padding:"10px",cursor:"pointer",opacity:typeof t.dataKey=="string"&&a.includes(t.dataKey)?.2:1}},t.value))))})))},args:{...d(n),width:500,height:400,data:z,margin:{top:10,right:30,left:0,bottom:0}}};var k,E,x;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(L=(W=f.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};const Ue=["StackedAreaChart","RangedAreaChart","RangedAreaChartWithGradient","WithChangingDataKeyAndAnimations","StackedAreaWithCustomLegend"];export{y as RangedAreaChart,h as RangedAreaChartWithGradient,g as StackedAreaChart,f as StackedAreaWithCustomLegend,u as WithChangingDataKeyAndAnimations,Ue as __namedExportsOrder,Qe as default};
