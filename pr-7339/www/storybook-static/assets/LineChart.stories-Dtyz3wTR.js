import{u as s,e}from"./iframe-CiPNgAw4.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-DPte-9pC.js";import{L as i}from"./LineChart-CEAXiuiV.js";import{g as C}from"./arrayEqualityCheck-C6nfogx3.js";import{L as n}from"./Line-DcN9XZ8g.js";import{R as A}from"./RechartsHookInspector-CVL4J5oe.js";import{X as p}from"./XAxis-BLKgRQop.js";import{T as c}from"./Tooltip-jRF_hFrM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D7DJEHdB.js";import"./index-DQVpqsS2.js";import"./immer-BXEbVIgV.js";import"./hooks-BI7NI193.js";import"./axisSelectors-Cy_y_L06.js";import"./d3-scale-CMk2gc8P.js";import"./zIndexSlice-BxzsaYhB.js";import"./renderedTicksSlice-Bj7nK2mV.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BCFleW8G.js";import"./chartDataContext-BajvTs6w.js";import"./CategoricalChart-DbOO-7mB.js";import"./resolveDefaultProps-BDpBhHr1.js";import"./Layer-tX1B1sjt.js";import"./ReactUtils-2ol7Qocl.js";import"./Label-C61zhpRD.js";import"./Text-BwxXBXY0.js";import"./DOMUtils-D_v29T4S.js";import"./ZIndexLayer-D-L4yEZ6.js";import"./ActivePoints-9r2oCFw-.js";import"./Dot-DSD9slKq.js";import"./types-DpsbB84I.js";import"./RegisterGraphicalItemId-Cfezvs_M.js";import"./ErrorBarContext-DeoWvLpT.js";import"./GraphicalItemClipPath-KikDG9N5.js";import"./SetGraphicalItem-Cc5PlSKV.js";import"./useAnimationId-ZolSEiin.js";import"./getRadiusAndStrokeWidthFromDot-CjDQOwTJ.js";import"./ActiveShapeUtils-DVoj5wPa.js";import"./isPlainObject-32kxwUzR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvhSXBPG.js";import"./Trapezoid-DD_RcOCU.js";import"./Sector-Cott3o-2.js";import"./Symbols-CZNQWcFs.js";import"./symbol-DD46dP6C.js";import"./step-DNW2l5aF.js";import"./Curve-CIk8sgOv.js";import"./index-BVLD_GdP.js";import"./ChartSizeDimensions-BUpN4cof.js";import"./OffsetShower-BX6EEwKB.js";import"./PlotAreaShower-D9cRvfnk.js";import"./CartesianAxis-CWGiyJPj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BTbIUCG9.js";import"./uniqBy-C_cZU6b-.js";import"./iteratee-Drtbgz-g.js";import"./Cross-2PZ7Q5B8.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
          <RechartsHookInspector />
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Oe=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Oe as __namedExportsOrder,Ke as default};
