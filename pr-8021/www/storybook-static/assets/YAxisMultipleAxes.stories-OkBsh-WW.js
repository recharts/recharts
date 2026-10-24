import{R as t}from"./iframe-TJn1iDy_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BwpngE3S.js";import{R as l}from"./zIndexSlice-DcxCrJas.js";import{C as x}from"./ComposedChart-CjLYC499.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D49dhmc6.js";import{L as a}from"./Line-BFq-C2HM.js";import{X as c}from"./XAxis-B_y5feDu.js";import{T as g}from"./Tooltip-BSqGhAg7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DOD1E2dd.js";import"./Text-Lhe6e02h.js";import"./resolveDefaultProps-B1uePsee.js";import"./pageBackground-CtZ35NZS.js";import"./isWellBehavedNumber-BKYnvYyY.js";import"./useId-DKCqn9Eo.js";import"./useBackwardsCompatibleTheme-BsIvvZ0r.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-qm_XHo-2.js";import"./index-CAYNC06-.js";import"./index-BNRC9x_2.js";import"./dataEntryStyles-XnzxZhd6.js";import"./axisSelectors-BRmQ6VbT.js";import"./throttle-boe4gmWF.js";import"./d3-scale-VVBOPfYG.js";import"./CartesianAxis-D8sqtaMD.js";import"./Layer-tyJENV3V.js";import"./types-Bczg7GWk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-SWpas3hv.js";import"./index-Cwz_ZaMA.js";import"./index-CAMm0n22.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CGWm-04h.js";import"./index-DfZWRiOw.js";import"./CartesianChart-a7iVuIbn.js";import"./chartDataContext-Lnk93lz4.js";import"./CategoricalChart-CtiAUO9e.js";import"./activeStyles-C-8W4HoU.js";import"./useAnimationId-BdprCSjI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bx76BAa_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BTqqsbMk.js";import"./tooltipContext-CAG3SHWZ.js";import"./RegisterGraphicalItemId-BU8lHAsW.js";import"./ErrorBarContext-B5z72jnv.js";import"./GraphicalItemClipPath-CEc-GXor.js";import"./SetGraphicalItem-DSOEOPaP.js";import"./getZIndexFromUnknown-CxY-_PC9.js";import"./useEffectiveDataKey-7HT13U9Y.js";import"./omit-BUNnoJpW.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DyBM506c.js";import"./step-L1YHvbsX.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BHSnIp6Z.js";import"./Dot-DGaRCVJg.js";import"./getRadiusAndStrokeWidthFromDot-uMuQLm3-.js";import"./useElementOffset-ByIXs8dn.js";import"./uniqBy-D8c_4GJh.js";import"./iteratee-uwfmLxFV.js";import"./Cross-n-dHaQZZ.js";import"./Sector-D5ozlMYp.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
