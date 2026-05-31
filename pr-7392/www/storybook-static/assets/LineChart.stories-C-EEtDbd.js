import{P as s,c as e}from"./iframe-BLrz4bzL.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-DPte-9pC.js";import{L as i}from"./LineChart-DVaYxeYN.js";import{g as C}from"./zIndexSlice-c7WW4zRb.js";import{L as n}from"./Line-DP0xx6zw.js";import{X as p}from"./XAxis-B81A99CY.js";import{T as c}from"./Tooltip-D7rWINP6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B9Liyr6r.js";import"./index-DkCredV6.js";import"./index-CZQ5QhT1.js";import"./index-DA1Z20ZR.js";import"./index-B0WUClSq.js";import"./immer-Cj0-obxe.js";import"./get-CEp8r7kA.js";import"./renderedTicksSlice-ReLUkucO.js";import"./axisSelectors-DEfJzTHu.js";import"./d3-scale-DXSYU9tD.js";import"./resolveDefaultProps-NE4wXzst.js";import"./isWellBehavedNumber-Di3xCgEJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-m5bXXKFS.js";import"./chartDataContext-Bv2SQjN_.js";import"./CategoricalChart-xCWpyDx3.js";import"./Curve-DsJ0vDb9.js";import"./types-C_iF2heC.js";import"./step-BiB5duu3.js";import"./path-DyVhHtw_.js";import"./Layer-CRR_7s_x.js";import"./ReactUtils-_7naDrvk.js";import"./Label-cQgelXjE.js";import"./Text-dr0MBeU-.js";import"./DOMUtils-CfWUtkPu.js";import"./ZIndexLayer-DQpprPKw.js";import"./ActivePoints-QQtgh7iH.js";import"./Dot-C1lQjxdh.js";import"./RegisterGraphicalItemId-BL7Ao-U_.js";import"./ErrorBarContext-C7bZMesM.js";import"./GraphicalItemClipPath-pnbh5A5H.js";import"./SetGraphicalItem-BUgSHz80.js";import"./useAnimationId-3KXs9R46.js";import"./getRadiusAndStrokeWidthFromDot-DElyUSRS.js";import"./ActiveShapeUtils-CXhzrWSQ.js";import"./CartesianAxis-BoM_TQOb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-BAtvFamF.js";import"./uniqBy-10OvI55m.js";import"./iteratee-CZgOWLEv.js";import"./Cross-DZz_-ucf.js";import"./Rectangle-BW1N7Z3u.js";import"./Sector-Cn6A8M5a.js";const Ce={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ee=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ee as __namedExportsOrder,Ce as default};
