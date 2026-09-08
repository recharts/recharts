import{R as t}from"./iframe-DNntBodD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CF14HcHp.js";import{R as l}from"./zIndexSlice-DiWKALGY.js";import{C as x}from"./ComposedChart-BH2fklny.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DASn7sL7.js";import{L as a}from"./Line-BW1G3hO8.js";import{X as c}from"./XAxis-BY2gNAXm.js";import{T as g}from"./Tooltip-CkfNsq-h.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CCBtX9go.js";import"./Text-CagXdBG4.js";import"./resolveDefaultProps-BBBno9Vz.js";import"./DOMUtils-Dvaq5fYM.js";import"./isWellBehavedNumber-BAVeTOtu.js";import"./useId-D2xBfPBM.js";import"./useBackwardsCompatibleTheme-CfEQJ-O-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BnBloPVM.js";import"./index-DJMKHO2r.js";import"./index-Dseq7l94.js";import"./RechartsWrapper-v1Mup_kK.js";import"./axisSelectors-B-JAPPws.js";import"./throttle-C7dkKHPf.js";import"./d3-scale-B1cdCOGf.js";import"./index-D3OPKtIE.js";import"./index-C8meDON6.js";import"./renderedTicksSlice-CzSTMxGf.js";import"./index-BzMcqiTa.js";import"./CartesianAxis-DWyLKLt1.js";import"./Layer-BJ4Iw8RT.js";import"./types-DE65RlUn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-xqtu5zOX.js";import"./chartDataContext-GWmAYxkF.js";import"./CategoricalChart-Bgnt48NN.js";import"./AnimatedItems-Dpv_eB7t.js";import"./useAnimationId-CbwNnleB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-3j1HbpFj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DL04WIzD.js";import"./tooltipContext-CFASs5YY.js";import"./RegisterGraphicalItemId-CkaBE6dd.js";import"./ErrorBarContext-D2Q4_EH8.js";import"./GraphicalItemClipPath-BQ6wt6g2.js";import"./SetGraphicalItem-cPTjE6UA.js";import"./getZIndexFromUnknown-B59RFcBT.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C_KRLiX1.js";import"./Curve-DrKWfUOs.js";import"./step-uR5oqTHC.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DsO8E_yf.js";import"./Dot-DwijN6tl.js";import"./getRadiusAndStrokeWidthFromDot-DSbl8OKM.js";import"./useElementOffset-CxyO0HMk.js";import"./uniqBy-mFdjf_gi.js";import"./iteratee-B3GlqRNc.js";import"./Cross-BLn3TIW2.js";import"./Sector-Dbfwf-mJ.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
