import{R as t}from"./iframe-CLYMtVVU.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Cpo1C8HM.js";import{R as l}from"./zIndexSlice-CYEFLgyb.js";import{C as x}from"./ComposedChart-CrRzeNT_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bbnf3h2h.js";import{L as a}from"./Line-BFselYwC.js";import{X as c}from"./XAxis-CBhmV7sv.js";import{T as g}from"./Tooltip-BE-R9wvc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DSRRGDfq.js";import"./CartesianAxis-BkW0Yyb6.js";import"./Layer-Bl-M4NCf.js";import"./resolveDefaultProps-CfuK3i5d.js";import"./Text-qYO8jmtc.js";import"./DOMUtils-4OHTktxt.js";import"./isWellBehavedNumber-Dc0RpdQ2.js";import"./Label-m25-3SN6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DaVYg93h.js";import"./index-D6XAYvxn.js";import"./index-C3oYNXo1.js";import"./types-Bp6tCXm1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-6fh8zoWq.js";import"./immer-C-1Bq0C7.js";import"./RechartsWrapper-jnQrHFKT.js";import"./index-D3KBwDZ7.js";import"./index-CUSuyme2.js";import"./axisSelectors-BM98nGPd.js";import"./d3-scale-Beg35rGW.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BTxrU-fy.js";import"./chartDataContext-BVNdEBob.js";import"./CategoricalChart-DtR6LZhP.js";import"./tooltipContext-BCitiStO.js";import"./AnimatedItems-fTI7Y-Cy.js";import"./useAnimationId-CPzMxfeA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dixlt82o.js";import"./ActiveShapeUtils-BVcr_xDt.js";import"./RegisterGraphicalItemId-DiMQaNFZ.js";import"./ErrorBarContext-CoCRg6bd.js";import"./GraphicalItemClipPath-DWrBQcDT.js";import"./SetGraphicalItem-B11_FOSD.js";import"./getZIndexFromUnknown-BZvK3N1I.js";import"./graphicalItemSelectors-CJLRFKOw.js";import"./Curve-CECgUjTc.js";import"./step-BUm_V17B.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CLviZOj_.js";import"./Dot-Xh8APYeF.js";import"./getRadiusAndStrokeWidthFromDot-DBkbTiQk.js";import"./useElementOffset-BBQpNMyz.js";import"./uniqBy-CZClMibn.js";import"./iteratee-Dvvu4gyG.js";import"./Cross-CrvnL4kK.js";import"./Sector-vSfHJqng.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
