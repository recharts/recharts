import{r as i,R as e}from"./iframe-G0Ik9O6t.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-CZRkIS6W.js";import{R as C}from"./zIndexSlice-CYnNRWxE.js";import{L as s}from"./Line-umGGBS5k.js";import{X as p}from"./XAxis-CWTgMLCK.js";import{T as c}from"./Tooltip-UEHO_gYO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0SK3-tY.js";import"./resolveDefaultProps-6jYqE8VH.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D9yir6Xs.js";import"./throttle-0RzAOwSl.js";import"./index-DJn7_RRX.js";import"./index-BSx-eOuX.js";import"./polarAxisSelectors-DbTpX6rz.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B1oMv4d2.js";import"./index-CZjz2J7d.js";import"./index-CrEwjtpS.js";import"./renderedTicksSlice-DJGvkPcQ.js";import"./index-yaYz5_hL.js";import"./fillDefinitions-DtfSekMJ.js";import"./CartesianChart-D9yJCYyl.js";import"./ZIndexPortal-DXabDpK4.js";import"./CategoricalChart-62rauA-s.js";import"./Layer-DsYtJDK_.js";import"./Curve-BM_Sw2Bx.js";import"./types-D7lN_jRq.js";import"./step-CKk5L9t9.js";import"./path-DyVhHtw_.js";import"./LabelList-Bc94H-h2.js";import"./Label-CylpphjQ.js";import"./Text-B4HlcW6K.js";import"./DOMUtils-BLMelfj-.js";import"./ZIndexLayer-rUK8h3YF.js";import"./ActivePoints-DtZW7fDP.js";import"./Dot-CCKVvK0p.js";import"./activeStyles-BHukLnjd.js";import"./useAnimationId-BSSTqixR.js";import"./dataEntryStyles-C4cqIMlE.js";import"./Symbols-DuXBDnMk.js";import"./symbol-D_Su1EIX.js";import"./ErrorBarContext-BMXI6Vn7.js";import"./SetGraphicalItem-CbwdoUqN.js";import"./getRadiusAndStrokeWidthFromDot-BGcbbY8R.js";import"./ActiveShapeUtils-BT1ALZoA.js";import"./useEffectiveDataKey-DGTKBWN-.js";import"./CartesianAxis-CcGZ5e89.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Cix9UpUK.js";import"./uniqBy-CkgI_JIc.js";import"./iteratee-lKPQ2sEZ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BC0HZx5f.js";import"./Rectangle-BekZI2Ti.js";import"./util-Dxo8gN5i.js";import"./Sector-23XJgAX_.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,He as __namedExportsOrder,Oe as default};
