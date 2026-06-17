import{r as s,R as e}from"./iframe-DGhU-a9T.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-D7KKlNBW.js";import{R as C}from"./zIndexSlice-D4C6hgdT.js";import{L as n}from"./Line-ivCSXdEf.js";import{X as p}from"./XAxis-BniO9eps.js";import{T as c}from"./Tooltip-CDB_Fk5c.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DbVRBKBT.js";import"./index-B_yATEtm.js";import"./index-DCbVvyOU.js";import"./index-Cst7TkYL.js";import"./index-DSZNwJZV.js";import"./immer-6aMp-_7U.js";import"./get-BovgKQJV.js";import"./renderedTicksSlice-DlUNX-2S.js";import"./axisSelectors-B2LpzdTT.js";import"./d3-scale-CGHFSatL.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-Dbt_ZrM5.js";import"./isWellBehavedNumber-CmPQeXr3.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-rdohZj9d.js";import"./chartDataContext-D0QBQcjy.js";import"./CategoricalChart-CgcUCFFA.js";import"./Layer-Dq7d9_uV.js";import"./Curve-D1MUxqb9.js";import"./types-DBzeQvsP.js";import"./step-LyYYLf4o.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-tx7FJlw3.js";import"./Label-Cn2enGhV.js";import"./Text-BWhw0wXD.js";import"./DOMUtils-CZpE5MKQ.js";import"./ZIndexLayer-D2dadpNA.js";import"./useAnimationId-whgPLHvU.js";import"./ActivePoints-DRG6SQTE.js";import"./Dot-ueeTOKda.js";import"./RegisterGraphicalItemId-7Cg8xoFx.js";import"./ErrorBarContext-D0SNCxES.js";import"./GraphicalItemClipPath-BG_0y6FZ.js";import"./SetGraphicalItem--dLvTOsx.js";import"./getRadiusAndStrokeWidthFromDot-Web9rp4C.js";import"./ActiveShapeUtils-FGDrwnsX.js";import"./CartesianAxis-Cncjk8wz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./useElementOffset-F-eAusQk.js";import"./uniqBy-61b_bX-x.js";import"./iteratee-IjYl2ZNO.js";import"./Cross-Bt7osVPs.js";import"./Rectangle-BQMmoLkW.js";import"./Sector-Cn8xNtXL.js";const Ee={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
