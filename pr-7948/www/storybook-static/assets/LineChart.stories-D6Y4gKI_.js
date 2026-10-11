import{r as i,R as e}from"./iframe-B5nqGCFx.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DmcWbqPZ.js";import{R as C}from"./zIndexSlice-fA6rJzVB.js";import{L as s}from"./Line-rcGSoU24.js";import{X as p}from"./XAxis-BbfaJWKY.js";import{T as c}from"./Tooltip-BcK9JY4b.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ba7GDCRC.js";import"./resolveDefaultProps-DTwkyIYB.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DRuLrEYP.js";import"./throttle-8usPf-nG.js";import"./index-COQrJFEi.js";import"./index-BRJwV6Tu.js";import"./isWellBehavedNumber-CTlIu6VQ.js";import"./d3-scale-Cvdyq6r4.js";import"./index-D7H2LPLl.js";import"./index-C0uKubiT.js";import"./renderedTicksSlice-D3liRtIY.js";import"./index-DNc7GpB0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bo-Bdmuv.js";import"./chartDataContext-BLw5SzU5.js";import"./CategoricalChart-BPnw4lhz.js";import"./Layer-SWDQGPXc.js";import"./Curve-CUMSQUCB.js";import"./types-CilMbPhc.js";import"./step-Bc1udJt4.js";import"./path-DyVhHtw_.js";import"./activeStyles-LGVgbHeS.js";import"./Label-Dboddtc6.js";import"./Text-D2l9VyZ3.js";import"./pageBackground-Do8lEaLA.js";import"./useId-D5UXkky-.js";import"./useBackwardsCompatibleTheme-DdYC-jFL.js";import"./ZIndexLayer-udH7BH-f.js";import"./useAnimationId-DegqvOnN.js";import"./dataEntryStyles-CA9fGSl9.js";import"./ActivePoints-BouQ6dSD.js";import"./Dot-CdI0Le8G.js";import"./ErrorBarContext-BKhVL6zW.js";import"./GraphicalItemClipPath-RjRlios3.js";import"./SetGraphicalItem-B1zewZJg.js";import"./getRadiusAndStrokeWidthFromDot-CpJam9J5.js";import"./ActiveShapeUtils-BaXicK3x.js";import"./useGraphicalItemIdentity-C3gqRS6g.js";import"./CartesianAxis-nGdi1wTE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-C7bOm6Io.js";import"./uniqBy-BrQ249xF.js";import"./iteratee-D4GTaDc4.js";import"./Cross-DCP6BZuO.js";import"./Rectangle-BlT3bA6g.js";import"./util-Dxo8gN5i.js";import"./Sector-Ch-MSYlU.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
