import{e as t}from"./iframe-DDDJQB5W.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CtpClMsJ.js";import{Y as r}from"./YAxis-5_ZrD8qJ.js";import{R as l}from"./arrayEqualityCheck-D0Xb1fN2.js";import{C as x}from"./ComposedChart-_IoWoZlX.js";import{B as o}from"./Bar-DaiHA_e-.js";import{L as a}from"./Line-DsjiLBEm.js";import{X as c}from"./XAxis-wieUEhCR.js";import{T as A}from"./Tooltip-DC-0U45b.js";import{R as g}from"./RechartsHookInspector-UcMzq5oF.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BsKQv1PU.js";import"./CartesianAxis-CkTm5RK2.js";import"./Layer-VwKMwUPk.js";import"./Text-Djbe6uvl.js";import"./DOMUtils-Dkn2KrJ_.js";import"./Label-vsQtY8U6.js";import"./PolarUtils-t5VCEmBY.js";import"./ZIndexLayer-DbViNaNl.js";import"./zIndexSlice-rPTjsX-n.js";import"./types-CGHtFgCy.js";import"./hooks-BP25Spjv.js";import"./axisSelectors-CQBK46ul.js";import"./RechartsWrapper-DdXQ715_.js";import"./CartesianChart-ZUHoE3GB.js";import"./chartDataContext-j99xrIrV.js";import"./CategoricalChart-grKPARSf.js";import"./tooltipContext-DL1Jhu1K.js";import"./ReactUtils-DAfUDxZJ.js";import"./ActiveShapeUtils-BxCYJ66h.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMimnTgv.js";import"./useAnimationId-C8z7_GYR.js";import"./Trapezoid-DCDgebWC.js";import"./Sector-DoveBBFo.js";import"./Symbols-ykgg1Owr.js";import"./Curve-zMorL5Ul.js";import"./RegisterGraphicalItemId-Du0teFv1.js";import"./ErrorBarContext-Ds9eksq1.js";import"./GraphicalItemClipPath-DhKhb3Nw.js";import"./SetGraphicalItem-C60hp0F5.js";import"./getZIndexFromUnknown-BdEk42ru.js";import"./graphicalItemSelectors-BIwgnApG.js";import"./ActivePoints-CxpylZkY.js";import"./Dot-JevgNCxq.js";import"./getRadiusAndStrokeWidthFromDot-_c6DE0sw.js";import"./useElementOffset-qOK29dPg.js";import"./iteratee-2IfE8Xfy.js";import"./Cross-BZo1a4xI.js";import"./index-BliyNw2M.js";import"./ChartSizeDimensions-BYcSqOel.js";import"./OffsetShower-BlJsaDut.js";import"./PlotAreaShower-rDHCl9WN.js";const yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ut=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,ut as __namedExportsOrder,yt as default};
