import{r as i,R as e}from"./iframe-CrWtoPAX.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-DaXWiSLV.js";import{R as C}from"./zIndexSlice-DMPrIjTD.js";import{L as s}from"./Line-x9GU49wt.js";import{X as p}from"./XAxis-6CbcM3Se.js";import{T as c}from"./Tooltip-CZyZKcRt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-MJk6C7sG.js";import"./resolveDefaultProps-Cl_vq3lE.js";import"./get-cF5BDHN6.js";import"./axisSelectors-B0-aB2Y5.js";import"./throttle-ByP8enHW.js";import"./index-CQ_XqvtJ.js";import"./index-D6uwIsxD.js";import"./polarAxisSelectors-DnnAPhgk.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Pq_E9xXF.js";import"./index-gHXYJ75j.js";import"./index-BbFlaPL7.js";import"./renderedTicksSlice-CetFWcek.js";import"./index-IYAiXkdd.js";import"./CartesianChart--l1pMg4t.js";import"./chartDataContext-BATi9LfG.js";import"./CategoricalChart-CRgz8QMs.js";import"./Layer-Bc-8Aj4A.js";import"./Curve-QjHrFrYT.js";import"./types-sEVDNypc.js";import"./step-xie03U5d.js";import"./path-DyVhHtw_.js";import"./activeStyles-D8qfovJq.js";import"./Label-9ANtnaX1.js";import"./Text-CyQrUZZg.js";import"./pageBackground-B_OyKJz4.js";import"./useId-CevBbkmx.js";import"./ZIndexLayer-mnQ0PTjZ.js";import"./dataEntryStyles-CcroDQaP.js";import"./useAnimationId-DIVMX3ZS.js";import"./ActivePoints-cB0BOXIY.js";import"./Dot-BpyqQ2DG.js";import"./Symbols-BmauIne2.js";import"./symbol-C4lC381C.js";import"./RegisterGraphicalItemId-DIduc0Gm.js";import"./ErrorBarContext-BGhx7PeS.js";import"./SetGraphicalItem-B4ZcrH9I.js";import"./getRadiusAndStrokeWidthFromDot-CuJjKg3J.js";import"./ActiveShapeUtils-BHD3PSWQ.js";import"./useEffectiveDataKey-DRFzjTt4.js";import"./CartesianAxis-D6bXO0ci.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-VqEKxajU.js";import"./uniqBy-CQj06pFN.js";import"./iteratee-DXOgM9Ce.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Nl2ZcA6z.js";import"./Rectangle-CNbdX1IY.js";import"./util-Dxo8gN5i.js";import"./Sector-D_zKCeqT.js";const Oe={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},He=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
