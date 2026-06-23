import{R as t}from"./iframe-CGx2OEYg.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BsBoxekz.js";import{R as l}from"./zIndexSlice-pdvjw9VY.js";import{C as x}from"./ComposedChart-Fb2MFzqr.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CN5yHzzq.js";import{L as a}from"./Line-CifdSMqw.js";import{X as c}from"./XAxis-DIPoApAz.js";import{T as g}from"./Tooltip-X3z-XELC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CzV2OpXY.js";import"./CartesianAxis-CmH7UKiI.js";import"./Layer-CdlD8-Bq.js";import"./resolveDefaultProps-D3B6MFw_.js";import"./Text-JACEtH7g.js";import"./DOMUtils-Ccjd7ivz.js";import"./isWellBehavedNumber-CKQRWs7o.js";import"./Label-CkpiET6q.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DGG-pQT2.js";import"./index-C4Z_dumW.js";import"./index-BL6WHaeN.js";import"./types-C4QX8ert.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CWw-Qe8F.js";import"./immer-BdXE1DYA.js";import"./RechartsWrapper-CnFoLhZv.js";import"./index-CIdFwa8F.js";import"./index-Cey4EIAC.js";import"./axisSelectors-B0UwcuKI.js";import"./d3-scale-DUV6_L5z.js";import"./CartesianChart-BiUQ--Jb.js";import"./chartDataContext-BDew7MkD.js";import"./CategoricalChart-DuzT5byy.js";import"./tooltipContext-CyJlnooR.js";import"./AnimatedItems-ZpkkXdAG.js";import"./useAnimationId-DrQktf3K.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CsueepJD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BMsaHZ8h.js";import"./RegisterGraphicalItemId-xU42uzR6.js";import"./ErrorBarContext-Gbubk7c-.js";import"./GraphicalItemClipPath-CIDK8z3L.js";import"./SetGraphicalItem-CM0l2hGK.js";import"./getZIndexFromUnknown-BhVnwvKh.js";import"./graphicalItemSelectors-DkJdRZ6w.js";import"./Curve-DLzFalE6.js";import"./step-BRyMFbya.js";import"./path-DyVhHtw_.js";import"./ActivePoints-N3tMfhSo.js";import"./Dot-CeKZXbQB.js";import"./getRadiusAndStrokeWidthFromDot-2cj_fDMP.js";import"./useElementOffset-kXeLLBXV.js";import"./uniqBy-D7gZTNBj.js";import"./iteratee-QFBEUu-H.js";import"./Cross-CpF8qJ66.js";import"./Sector-CW1HuHDn.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
