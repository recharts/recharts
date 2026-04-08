import{r as s,e}from"./iframe-DCw0tqQR.js";import{L as m}from"./LineChartArgs-E1uHAgXQ.js";import{g as y}from"./utils-ePvtT4un.js";import{p as k}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-BrEkuCBY.js";import{R as C}from"./arrayEqualityCheck-C2tBZ1Qy.js";import{L as n}from"./Line-CJv9DjSU.js";import{R as A}from"./RechartsHookInspector-Da0J_Xb_.js";import{X as p}from"./XAxis-DMq4si8_.js";import{T as c}from"./Tooltip-D96StMtN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DKHRd-Jp.js";import"./index-kR5_0WmK.js";import"./immer-DgwGzr0K.js";import"./hooks-BPO7V1JU.js";import"./axisSelectors-CtQi-3sb.js";import"./d3-scale-BoxOwXVD.js";import"./zIndexSlice-pEXw6d_M.js";import"./renderedTicksSlice-Bz3CfhIT.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ARcHu8Al.js";import"./chartDataContext-DTKyXvOp.js";import"./CategoricalChart-2d0K-n2g.js";import"./resolveDefaultProps-BCiQMHzG.js";import"./Layer-DecK4sAB.js";import"./ReactUtils-ByaRZgWA.js";import"./Label-CVZgdgXC.js";import"./Text-DQrSc9C-.js";import"./DOMUtils-xep50AIj.js";import"./ZIndexLayer-BYzXZQRZ.js";import"./ActivePoints-Du2deo7S.js";import"./Dot-BE79MMoA.js";import"./types-DB1MifHz.js";import"./RegisterGraphicalItemId-DNtaubKm.js";import"./ErrorBarContext-B44IbcKq.js";import"./GraphicalItemClipPath-DLhSizGK.js";import"./SetGraphicalItem-D17tmuod.js";import"./useAnimationId-S3q8t8Nn.js";import"./getRadiusAndStrokeWidthFromDot-BifHNKhN.js";import"./ActiveShapeUtils-fUwPie4c.js";import"./isPlainObject-CI4Edtk9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CriYIqhs.js";import"./Trapezoid-C7C4G9Uc.js";import"./Sector-CZ4caSpO.js";import"./Symbols-Ox381-HO.js";import"./symbol-Bs1LM99d.js";import"./step-C_4-RC3B.js";import"./Curve-BWU1MAzM.js";import"./index-CbS5rSne.js";import"./ChartSizeDimensions-DnWIR9Zc.js";import"./OffsetShower-DCtIXei-.js";import"./PlotAreaShower-AaZ9KRHa.js";import"./CartesianAxis-oFVfgyCE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-IIfWfiTv.js";import"./uniqBy-iHWEikWA.js";import"./iteratee-CUBZ09dl.js";import"./Cross-INzBBnO_.js";const Ke={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),L=s.useCallback(()=>{o(!0)},[o]),E=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:L,onMouseLeave:E,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3}),e.createElement(A,null)))},args:{...y(m),data:k}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0}),e.createElement(A,null)),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:k,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
