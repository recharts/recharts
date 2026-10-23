import{R as t}from"./iframe-BP-lIJn6.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Dyx7Nivk.js";import{R as l}from"./zIndexSlice-D3RgJgQF.js";import{C as x}from"./ComposedChart-Di3osW4J.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C4dYvTdy.js";import{L as a}from"./Line-Do4a8iV9.js";import{X as c}from"./XAxis-D7UL0yEG.js";import{T as g}from"./Tooltip-ChEod8ex.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-eMzNaTJc.js";import"./Text-sFd385s3.js";import"./resolveDefaultProps-BpLU83gk.js";import"./pageBackground-BxeZOm5U.js";import"./isWellBehavedNumber-B-TYzgiQ.js";import"./useId-BEGNTi1u.js";import"./useBackwardsCompatibleTheme-CNFi_woZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C0Gq1XyH.js";import"./index-B8dZU-9J.js";import"./index-C8ITQajG.js";import"./dataEntryStyles-DtR4SG-M.js";import"./axisSelectors-B6bM08CR.js";import"./throttle-CRwrBkn8.js";import"./d3-scale-BUOxWIbI.js";import"./CartesianAxis-B7dTibl7.js";import"./Layer-Dh6XQbJK.js";import"./types-BDcuyNFB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B2e0mRjq.js";import"./index-BOoGZrpB.js";import"./index-j3_diSu4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BGn36pC9.js";import"./index-BmFIm_LJ.js";import"./CartesianChart-BrvlcuUX.js";import"./chartDataContext-DxnoCrzs.js";import"./CategoricalChart-BLzi3Mv1.js";import"./activeStyles-CaOdi5W_.js";import"./useAnimationId-BeUNfbh5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNpXiGQR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-QZxg5z0Q.js";import"./tooltipContext-CR2ytdu7.js";import"./RegisterGraphicalItemId-CJi8bpow.js";import"./ErrorBarContext-BVsxDLFP.js";import"./GraphicalItemClipPath-_Vh94eGb.js";import"./SetGraphicalItem-CL36LKX_.js";import"./getZIndexFromUnknown-B-cILgbJ.js";import"./useEffectiveDataKey-C-3Q7bIW.js";import"./omit-3_nqBqPj.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B-WHWf6z.js";import"./step-1Avpntyj.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BnUbRfQW.js";import"./Dot-B-Fku2ox.js";import"./getRadiusAndStrokeWidthFromDot-Bcq6fsJt.js";import"./useElementOffset-B4j4ZMKA.js";import"./uniqBy-4sj4Loax.js";import"./iteratee-SNrVc_V2.js";import"./Cross-HFdQ01ZH.js";import"./Sector-IagwWihv.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
