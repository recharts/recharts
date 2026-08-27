import{R as t}from"./iframe-DGsKi3sD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CmpmKkx6.js";import{R as l}from"./zIndexSlice-KX0_yctO.js";import{C as x}from"./ComposedChart-ZhGI63Ch.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CQp-Hl0X.js";import{L as a}from"./Line-BUFeRjVl.js";import{X as c}from"./XAxis-DC55o2jW.js";import{T as g}from"./Tooltip-CwkMS4uO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-kB9Gr9Je.js";import"./Text-ChCNWouT.js";import"./resolveDefaultProps-WH78MRVQ.js";import"./DOMUtils-Bj-nNPQP.js";import"./isWellBehavedNumber-O5p8iLqQ.js";import"./useId-DbfF67AC.js";import"./useBackwardsCompatibleTheme-CdHfIa1f.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C-hUG3-A.js";import"./index-Dco7y41f.js";import"./index-Bp6gYlCO.js";import"./RechartsWrapper-DYCPiSo2.js";import"./axisSelectors-DtyBM-5t.js";import"./throttle-DCh63S7N.js";import"./d3-scale-D5k0CP0B.js";import"./index-BcRP16iL.js";import"./index-C3o7ztbZ.js";import"./renderedTicksSlice-BV6OKQcy.js";import"./index-BUKcBCac.js";import"./CartesianAxis-BxHxH-nJ.js";import"./Layer-BEEnYnIh.js";import"./types-BYQ55WzM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DqPq6dfa.js";import"./chartDataContext-YSpCe_4G.js";import"./CategoricalChart-kDHsGv00.js";import"./AnimatedItems-oaPm5uVb.js";import"./useAnimationId-CpfROKBj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-QV_I5D3C.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D1-7_dRK.js";import"./tooltipContext-DlHtQETE.js";import"./RegisterGraphicalItemId-Ci3kKosu.js";import"./ErrorBarContext-Lyc5VGnS.js";import"./GraphicalItemClipPath-DAhebsqX.js";import"./SetGraphicalItem-TmtzSo0n.js";import"./getZIndexFromUnknown-CQKa5LhS.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C4ge5-Nz.js";import"./Curve-Jm82kUWT.js";import"./step-B-VK-dxT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-ALRvVDi0.js";import"./Dot-BfPTVnro.js";import"./getRadiusAndStrokeWidthFromDot-D62b7kUR.js";import"./useElementOffset-BOCzr69a.js";import"./uniqBy-Bjp_9c9Z.js";import"./iteratee-3-ku6Z3Y.js";import"./Cross-CSwqD5sP.js";import"./Sector-CDbYdWIO.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
