import{r as i,R as e}from"./iframe-kLrggBpZ.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-Bs_-nMun.js";import{R as C}from"./zIndexSlice-CKCGde2F.js";import{L as s}from"./Line-D-PTgy1R.js";import{X as p}from"./XAxis-B-2vEHb0.js";import{T as c}from"./Tooltip-DMq8uqJi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DVOP9mMm.js";import"./resolveDefaultProps-D_LYpz2f.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D6wM5g8f.js";import"./throttle-BkTfx27C.js";import"./index-Bv7OV-9Z.js";import"./index-C-cjgJnd.js";import"./polarAxisSelectors-Dxnj4FFJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DE-4LfFJ.js";import"./index-iHP1RapJ.js";import"./index-B46QsuJB.js";import"./renderedTicksSlice-DgOqiypa.js";import"./index-DVOdnQdm.js";import"./fillDefinitions-CMyVvOcV.js";import"./CartesianChart-DP_q0vfs.js";import"./chartDataContext-DDJgrWCU.js";import"./CategoricalChart-CZkForA1.js";import"./getRadiusAndStrokeWidthFromDot-D72Rn_78.js";import"./Layer-DQPijciL.js";import"./Curve-CYSM8Ubv.js";import"./types-jTiWDmD0.js";import"./step-Be-YYOOJ.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DxslDEhK.js";import"./Label-CpspZ4dp.js";import"./Text-DNntKRRw.js";import"./ZIndexLayer-CZ_FttOi.js";import"./ActivePoints-B3OB9PGr.js";import"./Dot-D134Eke9.js";import"./activeStyles-BevLUsk4.js";import"./useAnimationId-CEVcGH0v.js";import"./Symbols-CW8iQe4i.js";import"./symbol-BFiK-Ghx.js";import"./ErrorBarContext-MaEtcn-S.js";import"./SetGraphicalItem-BJQeWc-6.js";import"./ActiveShapeUtils-BBiGMeQC.js";import"./useEffectiveDataKey-BIUvIyD8.js";import"./CartesianAxis-Dfi_5bxP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BhEl9_49.js";import"./uniqBy-B-ByEpXp.js";import"./iteratee-B7qBUA2a.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DOurOaBQ.js";import"./Rectangle-f81kex-M.js";import"./util-Dxo8gN5i.js";import"./Sector-CSRJPYTa.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Ke as __namedExportsOrder,we as default};
