import{e as t}from"./iframe-B3JCtExw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CNrfi_Sb.js";import{Y as r}from"./YAxis-jqSdFVky.js";import{R as l}from"./arrayEqualityCheck-BI5ikbve.js";import{C as x}from"./ComposedChart-BpG742gi.js";import{B as o}from"./Bar-CD7S4aqY.js";import{L as a}from"./Line-D3Zmpmyn.js";import{X as c}from"./XAxis-D8u9sAce.js";import{T as A}from"./Tooltip-BmkvFz22.js";import{R as g}from"./RechartsHookInspector-B6PrNXux.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-HcHTA_b-.js";import"./CartesianAxis-D0PW3MM-.js";import"./Layer-m9bU_GMN.js";import"./Text-DN2HTHOh.js";import"./DOMUtils-k31lOHZq.js";import"./Label-DjeP5w8o.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-BuYvVcNP.js";import"./zIndexSlice-CzadPF-N.js";import"./types-CzJtAzjL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-Cf16Eb3m.js";import"./axisSelectors-Bj5LT4A-.js";import"./RechartsWrapper-D9I6VAiu.js";import"./CartesianChart-DfwgXX5-.js";import"./chartDataContext-B7pD_95p.js";import"./CategoricalChart-HwleueHs.js";import"./tooltipContext-b-HqDcfL.js";import"./ReactUtils-YAdCW6ic.js";import"./ActiveShapeUtils-B5WBZ39Q.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D23yRLTV.js";import"./useAnimationId-YJOXYlAT.js";import"./Trapezoid-54tzhOdh.js";import"./Sector-zNAlF0WR.js";import"./Symbols-CjdLCsX8.js";import"./Curve-CrR1QL9p.js";import"./RegisterGraphicalItemId-DL15PSpi.js";import"./ErrorBarContext-Bf3IY7YL.js";import"./GraphicalItemClipPath-DJH2B78L.js";import"./SetGraphicalItem-CgnveGex.js";import"./getZIndexFromUnknown-xixyElwO.js";import"./graphicalItemSelectors-1_pZjmlj.js";import"./ActivePoints-Cr18JU0C.js";import"./Dot-BO3IuXC8.js";import"./getRadiusAndStrokeWidthFromDot-CZJ1soND.js";import"./useElementOffset-BoaozXpF.js";import"./iteratee-Cz7oSf5Y.js";import"./Cross-B0CbIQuP.js";import"./index-DqnQGlGG.js";import"./ChartSizeDimensions-CMi2DnfJ.js";import"./OffsetShower-DLnhG5IQ.js";import"./PlotAreaShower-CnaAKLan.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
