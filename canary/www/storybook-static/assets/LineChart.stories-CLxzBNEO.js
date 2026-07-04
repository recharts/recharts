import{r as s,R as e}from"./iframe-Bs1YcocL.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-DT7XlKgw.js";import{R as C}from"./zIndexSlice-t-gzu3GV.js";import{L as n}from"./Line-DDgei-_j.js";import{X as p}from"./XAxis-CkMNNwML.js";import{T as c}from"./Tooltip-DKfiMN_s.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DZyIyn43.js";import"./index-D9ADN89d.js";import"./index-CKxampel.js";import"./index-UwTvLFMH.js";import"./index-BRumuJ4r.js";import"./throttle--2-Gh3Mm.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BTmhgiNO.js";import"./axisSelectors-DMllfokS.js";import"./resolveDefaultProps-BnOzFFcK.js";import"./isWellBehavedNumber-BSPOqlf0.js";import"./d3-scale-37tvwNAS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CcQU6wxH.js";import"./chartDataContext-CPXqqfzF.js";import"./CategoricalChart-WxCIVI_m.js";import"./Layer-C-8BEA-e.js";import"./Curve-Bk-KwfJi.js";import"./types-DYZE7YT1.js";import"./step-Bu2gjmXw.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BJx7sqXo.js";import"./Label-XTRgfpgH.js";import"./Text-BklYvR7D.js";import"./DOMUtils-cVtaUTCs.js";import"./ZIndexLayer-CN0cINvr.js";import"./useAnimationId-BX2lcr_s.js";import"./ActivePoints-DYwvnYoP.js";import"./Dot-D62SIbzc.js";import"./RegisterGraphicalItemId-CjkTx9Ub.js";import"./ErrorBarContext-CMWCgNCI.js";import"./GraphicalItemClipPath-DVFJRr4Y.js";import"./SetGraphicalItem-Bacz05Gx.js";import"./getRadiusAndStrokeWidthFromDot-3DBOSJ59.js";import"./ActiveShapeUtils-CQH8McUN.js";import"./CartesianAxis-D8VsSsOs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-i2SJ2I4M.js";import"./uniqBy-DwCD0XBb.js";import"./iteratee-DbbXjD5I.js";import"./Cross-CW9bRfWd.js";import"./Rectangle-BQAZ15JG.js";import"./util-Dxo8gN5i.js";import"./Sector-DX9dCwqA.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
