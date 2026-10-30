import{r as i,R as e}from"./iframe-C3rzwJQL.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BmPdJkqa.js";import{R as C}from"./zIndexSlice-6U0v4l7r.js";import{L as s}from"./Line-BD2mjSH_.js";import{X as p}from"./XAxis-DiB8sdSh.js";import{T as c}from"./Tooltip-2DujJhc4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper--Ro5bVbm.js";import"./resolveDefaultProps-BMfVJcK1.js";import"./get-cF5BDHN6.js";import"./axisSelectors-_YduxGmH.js";import"./throttle-B7FABENa.js";import"./index-CqOvaYTW.js";import"./index-PmjQNdGh.js";import"./polarAxisSelectors-BUo1SW6c.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C-_ks2ZK.js";import"./index-BmfKzQXT.js";import"./index-Bhn-1pm4.js";import"./renderedTicksSlice-D3LNjura.js";import"./index-Dht9kxea.js";import"./CartesianChart-DMkGZMTo.js";import"./ZIndexPortal-x0Q6q0h0.js";import"./CategoricalChart-DxpiyG_I.js";import"./Layer-B6-xlzoZ.js";import"./Curve-NLRniG8O.js";import"./types-BKor_cCv.js";import"./step-B3ivcKoR.js";import"./path-DyVhHtw_.js";import"./LabelList-CqZcLqEs.js";import"./Label-CBpcK4i6.js";import"./Text-X-wYRMmx.js";import"./DOMUtils-PuY_kSj_.js";import"./ZIndexLayer-NyRG-f9x.js";import"./ActivePoints-1KuvikUF.js";import"./Dot-obmqUtS4.js";import"./activeStyles-DlQJ4xNs.js";import"./useAnimationId-Dn06_oTK.js";import"./dataEntryStyles-CekGYxzv.js";import"./Symbols-53MnXipr.js";import"./symbol-C4d-r7qM.js";import"./ErrorBarContext-BUzY2WBc.js";import"./SetGraphicalItem-CPBOF30a.js";import"./getRadiusAndStrokeWidthFromDot-CUcYHW0t.js";import"./ActiveShapeUtils-C4p3bqvh.js";import"./useEffectiveDataKey-CP5SXjqP.js";import"./CartesianAxis-CD4CCpjb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CADieQbP.js";import"./uniqBy-rOz66M2B.js";import"./iteratee-DVf-SFr-.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BzTKK6a0.js";import"./Rectangle-CRaBEnAs.js";import"./util-Dxo8gN5i.js";import"./Sector-CTZzADJH.js";const Ke={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Oe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const [isHovered, setIsHovered] = useState(false);
    const onMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, [setIsHovered]);
    const onMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, [setIsHovered]);
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} dataKey="uv" strokeWidth={isHovered ? 8 : 4} animationDuration={5000} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
        </LineChart>
        <LineChart {...args} id="BookTwo" className="BookTwo">
          <Line isAnimationActive={false} name="BookTwo" type="monotone" dataKey="uv" stroke="#ff7300" />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData,
    syncId: 'example-syncId',
    width: 400,
    height: 400
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Oe as __namedExportsOrder,Ke as default};
