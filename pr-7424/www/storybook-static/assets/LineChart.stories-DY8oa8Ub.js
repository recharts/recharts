import{r as s,R as e}from"./iframe-BqYy1R0H.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-D1qtvjP_.js";import{R as C}from"./zIndexSlice-V534Dm1F.js";import{L as n}from"./Line-B-irt6PV.js";import{X as p}from"./XAxis-BqSBdy-L.js";import{T as c}from"./Tooltip-CKKNj2xq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cr-pgoDs.js";import"./index-Bep5EplS.js";import"./index--UqKWgbM.js";import"./index-aB2rylH4.js";import"./index-C5sdWpfd.js";import"./immer-Bl4OFMGN.js";import"./get-BmpbLRXi.js";import"./renderedTicksSlice-DUFmYLd3.js";import"./axisSelectors-B5gEtu2k.js";import"./d3-scale-x-g3_XS_.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DF5EmNm0.js";import"./isWellBehavedNumber-Bh7WW-St.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-nuuk7Fog.js";import"./chartDataContext-Cg_GXcDk.js";import"./CategoricalChart-DKKEuBf1.js";import"./Layer-FvXx8y_M.js";import"./Curve-CjCX_hKZ.js";import"./types-CKi3J98u.js";import"./step-eDccUZNe.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BbE46Kp8.js";import"./Label-NYQMjqVT.js";import"./Text-Bb7f-h23.js";import"./DOMUtils-BM94Xuwo.js";import"./ZIndexLayer-COarhLNo.js";import"./useAnimationId-BGeq3Yxk.js";import"./ActivePoints-CUtjERgT.js";import"./Dot-CRjCuWT2.js";import"./RegisterGraphicalItemId-CLltNWrh.js";import"./ErrorBarContext-DTNv6sWg.js";import"./GraphicalItemClipPath-CsvgNQl2.js";import"./SetGraphicalItem-CBYRQcWu.js";import"./getRadiusAndStrokeWidthFromDot-C-NmK4oc.js";import"./ActiveShapeUtils--vnzUd2H.js";import"./CartesianAxis-x5MMDJHG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-ChEgaNUP.js";import"./uniqBy-CaGUEiLV.js";import"./iteratee-QgNCt4oW.js";import"./Cross-BuLADaE1.js";import"./Rectangle-BCODqy_s.js";import"./Sector-D7k5-18d.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Te=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Te as __namedExportsOrder,Ee as default};
