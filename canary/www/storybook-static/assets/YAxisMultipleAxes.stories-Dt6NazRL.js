import{R as t}from"./iframe-JB04ITxe.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-v1vqqyLW.js";import{R as l}from"./zIndexSlice-BedYLUjR.js";import{C as x}from"./ComposedChart-CSTLjLz1.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-TWpjxOw1.js";import{L as a}from"./Line-CHJHx0C6.js";import{X as c}from"./XAxis-2CswrS5Z.js";import{T as g}from"./Tooltip-DTfApWLx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BDmTa2no.js";import"./CartesianAxis-Ck1yZ59m.js";import"./Layer-CC5P43nm.js";import"./resolveDefaultProps-DnK0dHNE.js";import"./Text-C7k8RhMi.js";import"./DOMUtils-B7gcLuLP.js";import"./isWellBehavedNumber-CWoD1Zwt.js";import"./Label-D1e3845Y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-tYN38LXC.js";import"./index-CloOaeIj.js";import"./index-BR_ntmTV.js";import"./types-BtpCwQ36.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C53CIbMu.js";import"./immer-D_wC7bH8.js";import"./RechartsWrapper-D_Mnb6wJ.js";import"./index-BMvw03mU.js";import"./index-BEbfCQUB.js";import"./axisSelectors-OGGKPVta.js";import"./d3-scale-BSQ4FewF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ck5tcGy8.js";import"./chartDataContext-gfaUTl-k.js";import"./CategoricalChart-PrNOUwgL.js";import"./tooltipContext-LAC0OsGE.js";import"./AnimatedItems-BaII0Say.js";import"./useAnimationId-IX-vmahP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdFk3cFe.js";import"./ActiveShapeUtils-BF3URPPF.js";import"./RegisterGraphicalItemId-DJtDudBg.js";import"./ErrorBarContext-oGwgz47-.js";import"./GraphicalItemClipPath-B64UzPte.js";import"./SetGraphicalItem-bHcm5Lyp.js";import"./getZIndexFromUnknown-s2OGhK2v.js";import"./graphicalItemSelectors-C6AmRAQJ.js";import"./Curve-JVKmUUOc.js";import"./step-Dr-jp1Wr.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cs1OZT7v.js";import"./Dot-CiBnQwda.js";import"./getRadiusAndStrokeWidthFromDot-1qwqcEV-.js";import"./useElementOffset-47aPLcDT.js";import"./uniqBy-Bwbc5pf1.js";import"./iteratee-CMbzd2-W.js";import"./Cross-C05rdOq1.js";import"./Sector-q0vbRpE1.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
