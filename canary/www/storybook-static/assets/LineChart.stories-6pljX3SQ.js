import{r as i,R as e}from"./iframe-DUAuhaDC.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CVdvZABl.js";import{R as C}from"./zIndexSlice-CUoIUvAK.js";import{L as s}from"./Line-W70Z0DZz.js";import{X as p}from"./XAxis-DmKgW9ez.js";import{T as c}from"./Tooltip-D9wU0lMf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C2YARZjw.js";import"./resolveDefaultProps-CQK470NC.js";import"./get-CjriyByo.js";import"./axisSelectors-DKypf8DU.js";import"./throttle-C34y-YGF.js";import"./index-CzgbXtSC.js";import"./index-DNOW0KLV.js";import"./polarAxisSelectors-DEWRKmXv.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BzOzklff.js";import"./index-BgZAMOy1.js";import"./index-ClSqZzn2.js";import"./renderedTicksSlice-BdhAhPxn.js";import"./index-C-Ndc2us.js";import"./fillDefinitions-BiojjX3L.js";import"./CartesianChart-BVs3oRkR.js";import"./chartDataContext-DHU_iNNs.js";import"./CategoricalChart-ydkDuP1j.js";import"./getRadiusAndStrokeWidthFromDot-D_0qwyd0.js";import"./Layer-CfAsTpPf.js";import"./Curve-DZ4xVtop.js";import"./types-BR7AAoV4.js";import"./step-C7gBnBWw.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-ChkH59oB.js";import"./Label-BlZKxSKy.js";import"./Text-DT_5hWKb.js";import"./ZIndexLayer-CNcLZbQj.js";import"./ActivePoints-V66Ltvnp.js";import"./Dot-BAVTGvfE.js";import"./activeStyles-joM0AtO_.js";import"./useAnimationId-B4mDEWzj.js";import"./Symbols-dKtAvw89.js";import"./symbol-L0CgFuJm.js";import"./ErrorBarContext-CEfM97ww.js";import"./SetGraphicalItem-Oey6ebQm.js";import"./ActiveShapeUtils-B0DXFowQ.js";import"./useEffectiveDataKey-CqgqLaRX.js";import"./CartesianAxis-DlgnL8lU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Ce5Z9USj.js";import"./uniqBy-BJtcRwMD.js";import"./iteratee-rFCL0i6s.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CCONpWDd.js";import"./Rectangle-CDSDw5vR.js";import"./util-Dxo8gN5i.js";import"./Sector-D1NRM6xc.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
