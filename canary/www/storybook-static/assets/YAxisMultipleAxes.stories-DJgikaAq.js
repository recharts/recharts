import{R as t}from"./iframe-CWlxxFHy.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DLav1J7f.js";import{R as l}from"./zIndexSlice-eChv8v5o.js";import{C as x}from"./ComposedChart-euduWCYe.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CP-260Ad.js";import{L as a}from"./Line-85VhExuj.js";import{X as c}from"./XAxis-CaG1n6yG.js";import{T as g}from"./Tooltip-CwU5-Ii7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DN7T9GpD.js";import"./Text-th2Jn0HQ.js";import"./resolveDefaultProps-CVJCZaPv.js";import"./DOMUtils-Cr7AYV1x.js";import"./isWellBehavedNumber-ChXHiBih.js";import"./useId-pWQDKLmz.js";import"./useBackwardsCompatibleTheme-DcL_98G3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C0s9Ohbn.js";import"./index-COS8QMAe.js";import"./index-BmRJ-b8E.js";import"./RechartsWrapper-B211gnQK.js";import"./axisSelectors-CY4U4PmW.js";import"./throttle-Cuwp_Om4.js";import"./d3-scale-OLXd5h8I.js";import"./index-CVuc-u2_.js";import"./index-uNGw9-ET.js";import"./renderedTicksSlice-BfstiInC.js";import"./index-C1WwnpLj.js";import"./CartesianAxis-I-oV71yY.js";import"./Layer-bfSBtv71.js";import"./types-CjEkwpQR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-3sXmRDbR.js";import"./chartDataContext-tJUp4txc.js";import"./CategoricalChart-D5zBV6NM.js";import"./AnimatedItems-mLTl2k4L.js";import"./useAnimationId-BVaZGbnp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-F4SI3wJr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CN9JJwYa.js";import"./tooltipContext-BQEe4Ju4.js";import"./RegisterGraphicalItemId-C2KKr6Fw.js";import"./ErrorBarContext-BArOb86o.js";import"./GraphicalItemClipPath-BZhOYfMs.js";import"./SetGraphicalItem-tjuShIDU.js";import"./getZIndexFromUnknown-CvHUcGMl.js";import"./useGraphicalItemIdentity-BaE4xim7.js";import"./dataEntryStyles-BIaq3C15.js";import"./Curve-DlnhjhNv.js";import"./step-ClKKiZTa.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DyM9bM1H.js";import"./Dot-CVl6koMA.js";import"./getRadiusAndStrokeWidthFromDot-DJ40vw26.js";import"./useElementOffset-CpS3sFWC.js";import"./uniqBy-C1aAohnG.js";import"./iteratee-CYY7QzLS.js";import"./Cross-DAaEgFzG.js";import"./Sector-DYABfBoe.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
