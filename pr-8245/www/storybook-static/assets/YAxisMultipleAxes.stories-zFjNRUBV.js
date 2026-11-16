import{R as t}from"./iframe-B7zNIrOO.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DDLRqqCt.js";import{R as l}from"./zIndexSlice-BrXa08HH.js";import{C as x}from"./ComposedChart-CwA4XzeT.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DZHPSpY2.js";import{L as a}from"./Line-CDQvgmS5.js";import{X as c}from"./XAxis-vwLDX7Ct.js";import{T as g}from"./Tooltip-DkhqAMfD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Chg26k5h.js";import"./Text-RcA031Tp.js";import"./resolveDefaultProps-DItvlha8.js";import"./ZIndexLayer-wE65zH98.js";import"./index-DPky1fKm.js";import"./index-DeW5qBsv.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DMv2prKV.js";import"./throttle-eF_Q2QNr.js";import"./axisSelectors-BpHmVUrQ.js";import"./d3-scale-Ctmq2SXE.js";import"./CartesianAxis-_HHYfvE8.js";import"./Layer-_oO_qD0a.js";import"./types-Byak9pOA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BaWHA44G.js";import"./index-DvJGiIdF.js";import"./index-CSG1xziR.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BpqvgZcQ.js";import"./index-Bmy_tuVE.js";import"./fillDefinitions-BcvXO95l.js";import"./CartesianChart-DD-p_bEO.js";import"./chartDataContext-BXscOHGM.js";import"./CategoricalChart-eJZPSIID.js";import"./dataEntryStyles-m9rMNboQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CoacEEbH.js";import"./useAnimationId-kE9HxpHZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CLU25TzO.js";import"./tooltipContext-DDAvLrtp.js";import"./ErrorBarContext-Dk6Rlq45.js";import"./activeStyles-CDe2Kb4I.js";import"./SetGraphicalItem-CoOgwPlc.js";import"./getZIndexFromUnknown-DfUwzTSK.js";import"./useEffectiveDataKey-CezGQrGJ.js";import"./omit-CHt4C0-Q.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CzZYT27h.js";import"./step-BjjeCzgq.js";import"./path-DyVhHtw_.js";import"./ActivePoints-hyEey0jz.js";import"./Dot-CPebMAD4.js";import"./Symbols-FG4gFplx.js";import"./symbol-DWqvgSCA.js";import"./getRadiusAndStrokeWidthFromDot-BxhyxoF6.js";import"./useElementOffset-Ch1zQzym.js";import"./uniqBy-g_uehvzu.js";import"./iteratee-DcFC9bTU.js";import"./Cross-B_VLe-WO.js";import"./Sector-BJsNfYO5.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
