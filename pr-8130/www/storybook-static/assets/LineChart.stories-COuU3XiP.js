import{r as i,R as e}from"./iframe-D4WxERWR.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DBT3UlWK.js";import{R as C}from"./zIndexSlice-Ctb-XE3r.js";import{L as s}from"./Line-umjtcrXx.js";import{X as p}from"./XAxis-CSUQYPZm.js";import{T as c}from"./Tooltip-C28rp3v5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BABrVhwD.js";import"./resolveDefaultProps-CcZJ3F4Z.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CDo6nEPG.js";import"./throttle-YSLka_uT.js";import"./index-DBKc-d7M.js";import"./index-BrtN9C6M.js";import"./polarAxisSelectors-29BSG3By.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DUPxeW1L.js";import"./index-CN65hpd1.js";import"./index-CSWYxHgR.js";import"./renderedTicksSlice-nOQMzdpc.js";import"./index-DUxamRCa.js";import"./fillDefinitions-LA2OUO3V.js";import"./CartesianChart-CoO-_Rza.js";import"./ZIndexPortal-CgOieTb4.js";import"./CategoricalChart-BsaTkIBD.js";import"./Layer-Cql_Pemo.js";import"./Curve-CCgKIDxa.js";import"./types-Bl0q8uU6.js";import"./step-BXgucIl4.js";import"./path-DyVhHtw_.js";import"./LabelList-CQQZHleH.js";import"./Label-DI6ASMtN.js";import"./Text-DwZS23az.js";import"./DOMUtils-Dfn1BJxK.js";import"./ZIndexLayer-Czs-NT3b.js";import"./ActivePoints-CTDmaIKH.js";import"./Dot--NIPiAHj.js";import"./activeStyles-BIi7TIST.js";import"./useAnimationId-VHvbbifh.js";import"./dataEntryStyles-Q9NassVy.js";import"./Symbols-C5JQpjZ0.js";import"./symbol-DvMe5rhC.js";import"./ErrorBarContext-f8d14flb.js";import"./SetGraphicalItem-BTGcX_vm.js";import"./getRadiusAndStrokeWidthFromDot-DuPKRIUg.js";import"./ActiveShapeUtils-ExAh61OK.js";import"./useEffectiveDataKey-BiVeMsFi.js";import"./CartesianAxis-CWiuRNLE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DucCROoJ.js";import"./uniqBy-D_80LO3-.js";import"./iteratee-CWtaTKWH.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CWHoCY7b.js";import"./Rectangle-CKjrVYq4.js";import"./util-Dxo8gN5i.js";import"./Sector-DHTcqVpn.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
