import{r as i,R as e}from"./iframe-B-FpQGVE.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-INmjELcX.js";import{R as C}from"./zIndexSlice-Be4STqbb.js";import{L as s}from"./Line-D-uQwQl5.js";import{X as p}from"./XAxis-BLmB4Uxb.js";import{T as c}from"./Tooltip-aVmuAa7U.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D1D1pk27.js";import"./resolveDefaultProps-Dtl_SfnV.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BKBkYNOt.js";import"./throttle-fO2SI_hD.js";import"./index-Bwqm2cxX.js";import"./index-zzhJWva7.js";import"./isWellBehavedNumber-DgH__KwF.js";import"./d3-scale-BVd2nsAD.js";import"./index-BOg1JrYi.js";import"./index-DrqVEo4b.js";import"./renderedTicksSlice-C87TKpMP.js";import"./index-BSKvdyte.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CZbjQu0s.js";import"./chartDataContext-BgCxNtXs.js";import"./CategoricalChart-DYpdXtUy.js";import"./Layer-CC5u66Wi.js";import"./Curve-CAoBmZPA.js";import"./types-DD3qZx3A.js";import"./step-C2pk31G8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-e1etCO8j.js";import"./Label-CsGEr2R8.js";import"./Text-Djuu9tRj.js";import"./DOMUtils-miVyGpMZ.js";import"./useId-DAIuZYFe.js";import"./useBackwardsCompatibleTheme-CLDALELV.js";import"./ZIndexLayer-BnTzkaQy.js";import"./useAnimationId-BcCVwFd_.js";import"./ActivePoints-DdCBd2pZ.js";import"./Dot-B9Hx6qjI.js";import"./RegisterGraphicalItemId-1yR8tuVZ.js";import"./ErrorBarContext-BYOHAx31.js";import"./GraphicalItemClipPath-Cm6Nokyc.js";import"./SetGraphicalItem-Bih-NG2S.js";import"./getRadiusAndStrokeWidthFromDot-DjdOmN1y.js";import"./ActiveShapeUtils-DC9lclqW.js";import"./useGraphicalItemIdentity-DhhteXck.js";import"./CartesianAxis-AFvQJOoy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-4G7IjkNE.js";import"./uniqBy-Ddgi9D3Q.js";import"./iteratee-mgHFghyh.js";import"./Cross-B69nvR11.js";import"./Rectangle-BiqGpkxr.js";import"./util-Dxo8gN5i.js";import"./Sector-CEqLBkmr.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
