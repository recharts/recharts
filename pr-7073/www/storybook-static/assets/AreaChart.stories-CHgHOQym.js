import{e}from"./iframe-DNAE1NhS.js";import{g as d}from"./utils-ePvtT4un.js";import{A as i}from"./AreaChartArgs-C5AIwa1g.js";import{r as Y,p as G}from"./Page-Cj8EiXz7.js";import{A as l}from"./AreaChart-Cwszszro.js";import{R as m}from"./arrayEqualityCheck-mXK7KdlW.js";import{X as p}from"./XAxis-BXzG9_su.js";import{Y as c}from"./YAxis-Cl8JaIdm.js";import{A as o}from"./Area-AOMvuVSy.js";import{T as C}from"./Tooltip-Du2cbH53.js";import{R as g}from"./RechartsHookInspector-CXdTs72e.js";import{C as X}from"./CartesianGrid-DynNJww8.js";import{L as v}from"./Legend-C1ZerFOP.js";import{C as j}from"./ComposedChart-B76NVtIH.js";import{t as B}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BnyLV03c.js";import"./index-zEpWvrsz.js";import"./immer-CgyYfbuD.js";import"./hooks-D9_8XsUT.js";import"./axisSelectors-CAHD1NoH.js";import"./d3-scale-9rqZbRzS.js";import"./zIndexSlice-Dz-Y6weB.js";import"./renderedTicksSlice-caOf_y68.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-hy_UmrJw.js";import"./chartDataContext-ugJXSBb3.js";import"./CategoricalChart-B3LDNru7.js";import"./resolveDefaultProps-CjxP23mN.js";import"./CartesianAxis-ya5SmFCu.js";import"./Layer-D_bZVw-_.js";import"./Text-oeG0hSrI.js";import"./DOMUtils-MNEnNJaG.js";import"./Label-Czy9EWVi.js";import"./ZIndexLayer-NBg0M_kA.js";import"./types-BvNVkM_d.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DnknT2C5.js";import"./step-DDruULJc.js";import"./ReactUtils-DmdO9I71.js";import"./ActivePoints-DH0GLZdO.js";import"./Dot-Cr144KYy.js";import"./RegisterGraphicalItemId-Bn08OEO8.js";import"./GraphicalItemClipPath-aQHsATLs.js";import"./SetGraphicalItem-1nnxs2qY.js";import"./useAnimationId-BLg_egJR.js";import"./getRadiusAndStrokeWidthFromDot-BEY7eYKz.js";import"./graphicalItemSelectors-CnnCHwYo.js";import"./useElementOffset-BjwHw1bZ.js";import"./uniqBy-DskIqC9r.js";import"./iteratee-Bv9grG7U.js";import"./Cross-D0R3uFK-.js";import"./Rectangle-Cm__RLQd.js";import"./Sector-BPDHR2kf.js";import"./index-FFJywn3r.js";import"./ChartSizeDimensions-B5bHZnUB.js";import"./OffsetShower-Bw8a_rrw.js";import"./PlotAreaShower-BJMlxwGr.js";import"./Symbols-DnMbrkmh.js";import"./symbol-CmAtNHVX.js";const Ue={component:l,docs:{autodocs:!1},argTypes:i},y={render:n=>e.createElement(m,{width:"100%",height:"100%"},e.createElement(l,{...n},e.createElement(X,{strokeDasharray:"3 3"}),e.createElement(c,null),e.createElement(p,{dataKey:"x",type:"number",scale:"time",domain:["auto","auto"]}),e.createElement(o,{type:"monotone",dataKey:"y",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),e.createElement(o,{type:"monotone",dataKey:"z",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),e.createElement(C,{active:!0,defaultIndex:2}),e.createElement(g,null),e.createElement(v,null))),args:{...d(i),width:500,height:400,data:B,margin:{top:10,right:30,left:0,bottom:0}}},h={render:n=>e.createElement(m,{width:"100%",height:"100%"},e.createElement(l,{...n},e.createElement(p,{dataKey:"day"}),e.createElement(c,null),e.createElement(o,{dataKey:"temperature",stroke:"#d82428",fill:"#8884d8"}),e.createElement(C,{defaultIndex:4,active:!0}),e.createElement(g,null))),args:{...d(i),width:500,height:400,data:Y,margin:{top:10,right:30,left:0,bottom:0}}},$=[{timeHorizon:1,range:[-2.1,12.6]},{timeHorizon:3,range:[1,9.5]},{timeHorizon:5,range:[2,8.5]},{timeHorizon:10,range:[2.9,7.6]},{timeHorizon:15,range:[3.4,7.1]}],u={render:()=>e.createElement(m,{width:"100%",height:"100%"},e.createElement(l,{data:$,width:1e3,height:600,margin:{top:20,right:200,bottom:20,left:20}},e.createElement("defs",null,e.createElement("linearGradient",{id:"fill-gradient",gradientTransform:"rotate(90)"},e.createElement("stop",{offset:"5%",stopColor:"green",stopOpacity:1}),e.createElement("stop",{offset:.86,stopColor:"green",stopOpacity:.1}),e.createElement("stop",{offset:.86,stopColor:"red",stopOpacity:.1}),e.createElement("stop",{offset:"95%",stopColor:"red",stopOpacity:1}))),e.createElement(o,{type:"monotone",dataKey:"range",fill:"url(#fill-gradient)",stroke:"none"}),e.createElement(p,{dataKey:"timeHorizon",type:"number",domain:[1,"dataMax"],axisLine:!1,ticks:[1,3,5,10,15],unit:" yr"}),e.createElement(c,{unit:"%",ticks:[-5,0,5,10,15],domain:[-5,15]}),e.createElement(C,null),e.createElement(g,null))),args:{...d(i)}},f={render:n=>{const[a,k]=e.useState("uv");return e.createElement(e.Fragment,null,e.createElement("form",{style:{display:"flex",flexDirection:"column"},onChange:s=>"value"in s.target&&typeof s.target.value=="string"&&k(s.target.value)},e.createElement("label",{htmlFor:"dataKey-uv",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-uv",name:"dataKey",value:"uv",defaultChecked:a==="uv"}),"dataKey=uv"),e.createElement("label",{htmlFor:"dataKey-pv",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-pv",name:"dataKey",value:"pv",defaultChecked:a==="pv"}),"dataKey=pv"),e.createElement("label",{htmlFor:"dataKey-empty",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-empty",name:"dataKey",value:"hidden",defaultChecked:a==="hidden"}),"Hidden")),e.createElement(m,{width:"100%"},e.createElement(j,{...n},e.createElement(v,null),e.createElement(p,{dataKey:"name"}),e.createElement(c,null),e.createElement(o,{dataKey:a,label:{fill:"green"},dot:!0}),e.createElement(C,null),e.createElement(g,null))))},args:{...d(i),width:500,height:400,data:G,margin:{top:10,right:30,left:0,bottom:0}}},A={render:n=>{const[a,k]=e.useState([]),s=({dataKey:r})=>{typeof r=="string"&&k(t=>t.includes(r)?t.filter(K=>K!==r):[...t,r])};return e.createElement(m,{width:"100%",height:"100%"},e.createElement(l,{...n,stackOffset:"silhouette"},e.createElement(X,{strokeDasharray:"3 3"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null),e.createElement(o,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",strokeWidth:3,fill:"rgba(136,132,216,0.47)",hide:a.includes("uv"),animationBegin:0}),e.createElement(o,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",strokeWidth:3,fill:"rgba(130,202,157,0.47)",hide:a.includes("pv"),animationBegin:300}),e.createElement(o,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",strokeWidth:3,fill:"rgba(255,198,88,0.47)",hide:a.includes("amt"),animationBegin:600}),e.createElement(g,null),e.createElement(v,{content:({payload:r})=>e.createElement("ul",{style:{display:"flex",flexDirection:"row",listStyleType:"none",padding:0}},r==null?void 0:r.map((t,K)=>e.createElement("li",{key:`item-${K}`,style:{color:t.color}},e.createElement("button",{type:"button",onClick:()=>s(t),style:{background:"none",border:t.inactive?"3px solid #ccc":`3px solid ${t.color}`,borderRadius:"20%",padding:"10px",cursor:"pointer",opacity:typeof t.dataKey=="string"&&a.includes(t.dataKey)?.2:1}},t.value))))})))},args:{...d(i),width:500,height:400,data:G,margin:{top:10,right:30,left:0,bottom:0}}};var E,x,b;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis />
          <XAxis dataKey="x" type="number" scale="time" domain={['auto', 'auto']} />
          <Area type="monotone" dataKey="y" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="z" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Tooltip active defaultIndex={2} />
          <RechartsHookInspector />
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
}`,...(b=(x=y.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var I,R,w;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <AreaChart {...args}>
          <XAxis dataKey="day" />
          <YAxis />
          <Area dataKey="temperature" stroke="#d82428" fill="#8884d8" />
          <Tooltip defaultIndex={4} active />
          <RechartsHookInspector />
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
}`,...(w=(R=h.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var D,S,H;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </AreaChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(AreaChartArgs)
  }
}`,...(H=(S=u.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var O,T,F;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
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
}`,...(F=(T=f.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var W,L,z;A.parameters={...A.parameters,docs:{...(W=A.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(z=(L=A.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const Ve=["StackedAreaChart","RangedAreaChart","RangedAreaChartWithGradient","WithChangingDataKeyAndAnimations","StackedAreaWithCustomLegend"];export{h as RangedAreaChart,u as RangedAreaChartWithGradient,y as StackedAreaChart,A as StackedAreaWithCustomLegend,f as WithChangingDataKeyAndAnimations,Ve as __namedExportsOrder,Ue as default};
