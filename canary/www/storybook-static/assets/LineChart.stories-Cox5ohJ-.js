import{r as s,R as e}from"./iframe-Bx8H2Ifg.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-CNwdYzOI.js";import{R as C}from"./zIndexSlice-CibQQwTH.js";import{L as n}from"./Line-BVmQtC22.js";import{X as p}from"./XAxis-DdmuYybV.js";import{T as c}from"./Tooltip-BcMh87Zj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DXti2BhE.js";import"./index-DZMfkQNN.js";import"./index-CDB7Uuo1.js";import"./index-D7D5zQI-.js";import"./index--RF86Un6.js";import"./throttle-DcH5jY9T.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BNkNmyy9.js";import"./axisSelectors-Cw32qcc-.js";import"./resolveDefaultProps-atv84skJ.js";import"./isWellBehavedNumber-BjCfjx0l.js";import"./d3-scale-DWE49Teg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B8KEQc2q.js";import"./chartDataContext-TCBOpZph.js";import"./CategoricalChart-D_-fj6zl.js";import"./Layer-B1Bv1tpm.js";import"./Curve-dStP5J8a.js";import"./types-Dz5mzedy.js";import"./step-BYuX5L52.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CwxdPZKw.js";import"./Label-DbBEn_Ke.js";import"./Text-DTS3udCG.js";import"./DOMUtils-B-4npwaq.js";import"./ZIndexLayer-C7frmUa_.js";import"./useAnimationId-BtPQFk12.js";import"./ActivePoints-BilhKSxD.js";import"./Dot-bxDDkr32.js";import"./RegisterGraphicalItemId-B2iGTOcQ.js";import"./ErrorBarContext-BI-oQ816.js";import"./GraphicalItemClipPath-B35L0Cvh.js";import"./SetGraphicalItem-CrnQ6XAB.js";import"./getRadiusAndStrokeWidthFromDot-cCEJEDsq.js";import"./ActiveShapeUtils-D4eokJlb.js";import"./RechartsThemeContext-CzAT56ie.js";import"./CartesianAxis-DzJ0MnYC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-DNIfR18S.js";import"./uniqBy-Dxv0QDCx.js";import"./iteratee-BhoZeZsJ.js";import"./Cross-ChkFCt86.js";import"./Rectangle-BXj7PHVN.js";import"./util-Dxo8gN5i.js";import"./Sector-CybYrglf.js";const Be={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Ie=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Ie as __namedExportsOrder,Be as default};
