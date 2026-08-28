import{R as t}from"./iframe-xbzO8ihI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DldbyKuF.js";import{R as l}from"./zIndexSlice-DHGEGTXf.js";import{C as x}from"./ComposedChart-D7Lr4F7H.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CFi2iEef.js";import{L as a}from"./Line-BdzEVQ9Q.js";import{X as c}from"./XAxis-DsYRd7p5.js";import{T as g}from"./Tooltip-CGj2ny3y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Db5UOJ54.js";import"./Text-DyvJm0Va.js";import"./resolveDefaultProps-BksGg43P.js";import"./DOMUtils-BBUQNy1o.js";import"./isWellBehavedNumber-BpEs7sJw.js";import"./useId-BsQI64Io.js";import"./useBackwardsCompatibleTheme-BaDaWPI3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CdA1EieN.js";import"./index-BqW4Uzzs.js";import"./index-Db_N0V-Y.js";import"./RechartsWrapper-B40yK-0z.js";import"./axisSelectors-D-N5tVUk.js";import"./throttle-CSfITKZw.js";import"./d3-scale-C-XGUw-P.js";import"./index-Bw8yyLrA.js";import"./index-VAUYyiDQ.js";import"./renderedTicksSlice-BCm2ZtcS.js";import"./index-DNQsy-E5.js";import"./CartesianAxis-D6daOnac.js";import"./Layer-CyOAhwla.js";import"./types-DVHQQz9N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CVt6roZ8.js";import"./chartDataContext-DjNdQ09m.js";import"./CategoricalChart-Btyj_0ug.js";import"./AnimatedItems-GZSCW2O0.js";import"./useAnimationId-n5GjykVw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BOVHDpEg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EHYmL-db.js";import"./tooltipContext-GcrjWPb2.js";import"./RegisterGraphicalItemId-B8RWrhFG.js";import"./ErrorBarContext-DuvOSHRK.js";import"./GraphicalItemClipPath-C_jr7WWD.js";import"./SetGraphicalItem-C2V6xjnq.js";import"./getZIndexFromUnknown-CwJWcRq4.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DeaTRdU-.js";import"./Curve-D088EVRW.js";import"./step-wFZZajAR.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bo6-hXPj.js";import"./Dot-S_RimJ32.js";import"./getRadiusAndStrokeWidthFromDot-Cf72lShV.js";import"./useElementOffset-Bp43p8yN.js";import"./uniqBy--5lFk6DW.js";import"./iteratee-DbaMtUdN.js";import"./Cross-ElmD4pc-.js";import"./Sector-E5xpJSOO.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
