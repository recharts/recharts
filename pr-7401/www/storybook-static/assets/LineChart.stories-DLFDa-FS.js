import{P as s,c as e}from"./iframe-Bhg7B6nu.js";import{L as m}from"./LineChartArgs-_mND0tRp.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-DPte-9pC.js";import{L as i}from"./LineChart-0eOMbApz.js";import{g as C}from"./zIndexSlice-CpfnlaY3.js";import{L as n}from"./Line-DnXTv09L.js";import{X as p}from"./XAxis-BaFC3En6.js";import{T as c}from"./Tooltip-uYtmtlnI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BO-9qVe8.js";import"./index-hZ-hNf3X.js";import"./index-LweJEeHr.js";import"./index-fTPSImHI.js";import"./index-BeLXdiSX.js";import"./immer-DB_z4hP2.js";import"./get-Bdfg8b7E.js";import"./renderedTicksSlice-BWF9zmW-.js";import"./axisSelectors-CdfzhIk0.js";import"./d3-scale-CZa5b7JS.js";import"./resolveDefaultProps-DYGylzt5.js";import"./isWellBehavedNumber-CRt7foTE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B_99cbzZ.js";import"./chartDataContext-CTHxBaCW.js";import"./CategoricalChart-Dr5hcJGP.js";import"./Curve-CepT2fcB.js";import"./types-CBsC6Zml.js";import"./step-B9W3HLIp.js";import"./path-DyVhHtw_.js";import"./Layer-CWtBt3tO.js";import"./ReactUtils-BhSP1QaD.js";import"./Label-g9fCGbFu.js";import"./Text-B3Epq4Nr.js";import"./DOMUtils-umXRQPav.js";import"./ZIndexLayer-BLUBt3jh.js";import"./ActivePoints-DopF7LMV.js";import"./Dot-DS4twGmw.js";import"./RegisterGraphicalItemId-BzH-PWzG.js";import"./ErrorBarContext-D0cT0mEH.js";import"./GraphicalItemClipPath-BljaU2rV.js";import"./SetGraphicalItem-DpMnWL3z.js";import"./useAnimationId-CDEhZOSy.js";import"./getRadiusAndStrokeWidthFromDot-CR_o6rYy.js";import"./ActiveShapeUtils-CZOt3Dfh.js";import"./CartesianAxis-D1bYab0n.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-ByWie8Pg.js";import"./uniqBy-DE9J9zXb.js";import"./iteratee-_s1w9D9m.js";import"./Cross-D5JF58Wa.js";import"./Rectangle-JbDXy-um.js";import"./Sector-C5Td0knX.js";const Ce={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
