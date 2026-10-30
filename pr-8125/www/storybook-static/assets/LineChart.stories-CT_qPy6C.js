import{r as i,R as e}from"./iframe-DofrrzSz.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-tOZ7w82P.js";import{R as C}from"./zIndexSlice-D4jXZr7P.js";import{L as s}from"./Line-BTgeNYF6.js";import{X as p}from"./XAxis-eOTmMW_3.js";import{T as c}from"./Tooltip-BfuE3aDI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-E_-kYNca.js";import"./resolveDefaultProps-EpIoYf6A.js";import"./get-cF5BDHN6.js";import"./axisSelectors-pqZm8n4V.js";import"./throttle-Cv7JSN-h.js";import"./index-CmvIzJTJ.js";import"./index-CiJIMcsu.js";import"./polarAxisSelectors-B2VAv-kj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BRGWuf4p.js";import"./index-BJz466Uq.js";import"./index-CebJFPbx.js";import"./renderedTicksSlice-C12QoSei.js";import"./index-MFcngAQ7.js";import"./CartesianChart-ofW7KWWn.js";import"./ZIndexPortal-D6LzzXvN.js";import"./CategoricalChart-swxT2d4I.js";import"./Layer-29jH0q4c.js";import"./Curve-CgPD96Nk.js";import"./types-DwbSI8T9.js";import"./step-B24WZLE3.js";import"./path-DyVhHtw_.js";import"./LabelList-CvvaVn8W.js";import"./Label-CuxsGsNv.js";import"./Text-CCxE4_21.js";import"./DOMUtils-CiyeVOwd.js";import"./ZIndexLayer-C9xNwEQ1.js";import"./ActivePoints-DD_thTv0.js";import"./Dot-OjOZfNpf.js";import"./activeStyles-DFxA9Zbs.js";import"./useAnimationId-DIc4f048.js";import"./dataEntryStyles-DuwvESx8.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-DBYIMXup.js";import"./symbol-BNKxEPpC.js";import"./ErrorBarContext-Be2kUHyO.js";import"./SetGraphicalItem-VPByvNpp.js";import"./getRadiusAndStrokeWidthFromDot-Cwz8hFM3.js";import"./ActiveShapeUtils-C_2mrMKm.js";import"./useEffectiveDataKey-kz6GzdqE.js";import"./CartesianAxis-BejCdWme.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-4AYFNtWz.js";import"./uniqBy-DXDzCPGj.js";import"./iteratee-BW9bJqkP.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Ct78yXXS.js";import"./Rectangle-DH-fHCjZ.js";import"./util-Dxo8gN5i.js";import"./Sector-DZJ-f5iW.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
