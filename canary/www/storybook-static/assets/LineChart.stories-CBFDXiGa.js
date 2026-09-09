import{r as i,R as e}from"./iframe-DsxZlU5r.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CrNb1G3c.js";import{R as C}from"./zIndexSlice-C9X4WKOn.js";import{L as s}from"./Line-35w6scH_.js";import{X as p}from"./XAxis-CYz9D79b.js";import{T as c}from"./Tooltip-Bi7KeNHc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BwO2SplL.js";import"./resolveDefaultProps-txR9uiFl.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BqZ8E3_i.js";import"./throttle-UzrpYZZa.js";import"./index-BsKriH0J.js";import"./index-Dkn7Rgxy.js";import"./isWellBehavedNumber-CTT7gzfy.js";import"./d3-scale--_ZfhLG0.js";import"./index-NKDSt5W_.js";import"./index-B7c49aj4.js";import"./renderedTicksSlice-DrjN0-hZ.js";import"./index-BlUmu3HQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D7Lk4UPu.js";import"./chartDataContext-BuJB6SDT.js";import"./CategoricalChart-mfjR9F1v.js";import"./Layer-C9CQXPgt.js";import"./Curve-CSIe3S-R.js";import"./types-DNLq32QI.js";import"./step-Dj6yUh6h.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D0Io6hoN.js";import"./Label-W_BNIllg.js";import"./Text-rMrFJjxt.js";import"./DOMUtils-DeolnxnC.js";import"./useId-CXqbyXNP.js";import"./useBackwardsCompatibleTheme-CMuNrJmL.js";import"./ZIndexLayer-B5VyzAKQ.js";import"./useAnimationId-BTOaFYFg.js";import"./ActivePoints-BMZtXxjb.js";import"./Dot-CitZKaHy.js";import"./RegisterGraphicalItemId-FY2E50jC.js";import"./ErrorBarContext-BSpxN_KO.js";import"./GraphicalItemClipPath-D9CdDoZo.js";import"./SetGraphicalItem-DMEejLkA.js";import"./getRadiusAndStrokeWidthFromDot-Ddp4bide.js";import"./ActiveShapeUtils-DWfz214x.js";import"./useGraphicalItemIdentity-DcyTJT25.js";import"./CartesianAxis-xh5AQvWr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-CkmTikZn.js";import"./uniqBy-CaKEfqj9.js";import"./iteratee-Bn0tiKsf.js";import"./Cross-Bj59EFsY.js";import"./Rectangle-Y7TKK3zv.js";import"./util-Dxo8gN5i.js";import"./Sector-BwPHwtT0.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
