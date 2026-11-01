import{r as i,R as e}from"./iframe-0ard7KC3.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DDL72ruS.js";import{R as C}from"./zIndexSlice-D6_sdm0t.js";import{L as s}from"./Line-D3ULcpWK.js";import{X as p}from"./XAxis-BVBrGZek.js";import{T as c}from"./Tooltip-CXNDKna3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BOxuYrqk.js";import"./resolveDefaultProps-BPB9Gu5f.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Cr_3x7-m.js";import"./throttle-1OYicAaw.js";import"./index-BOEtp96n.js";import"./index-JVAEaqaY.js";import"./polarAxisSelectors-3HyfX2K5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CLPwnwVf.js";import"./index-9PVjWb0J.js";import"./index-CsSqo8aU.js";import"./renderedTicksSlice-D50-krNg.js";import"./index-ByhU0DDr.js";import"./CartesianChart-CQQLqvcY.js";import"./ZIndexPortal-Cak7rTbR.js";import"./CategoricalChart-DbqXM1OT.js";import"./Layer-C0FwdD0E.js";import"./Curve-N3TADMlP.js";import"./fillDefinitions-CarsCIb_.js";import"./pageBackground-C8Mqnqon.js";import"./types-DiLmbnVu.js";import"./step-Qo2aOxrQ.js";import"./path-DyVhHtw_.js";import"./LabelList-fTXqNJ75.js";import"./Label-Bzl5TsqO.js";import"./Text-BVN9ck4W.js";import"./DOMUtils-DPHrecH2.js";import"./ZIndexLayer-Xk93xkJ7.js";import"./ActivePoints-DWkJMBKo.js";import"./Dot-CmHWeTnm.js";import"./activeStyles-7ntMjbeG.js";import"./useAnimationId-DI_YvP-u.js";import"./dataEntryStyles-BOdZqKVH.js";import"./Symbols-lsHxNSE5.js";import"./symbol-BoiiS6VD.js";import"./ErrorBarContext-Dy4MR2nb.js";import"./SetGraphicalItem-CY1fZPiL.js";import"./getRadiusAndStrokeWidthFromDot-CnAH_jdf.js";import"./ActiveShapeUtils-Uo1E3VyC.js";import"./useEffectiveDataKey-BiPIBSbw.js";import"./CartesianAxis-CO2WQovg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DpbXbWGx.js";import"./uniqBy-BJs_UcfY.js";import"./iteratee-B5R2H-12.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CIO300v-.js";import"./Rectangle-C4AL_ut7.js";import"./util-Dxo8gN5i.js";import"./Sector-CGQeWo1Z.js";const He={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},xe=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,xe as __namedExportsOrder,He as default};
