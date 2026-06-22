import{R as t}from"./iframe-D_SaqINW.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DBPcER2k.js";import{R as l}from"./zIndexSlice-Nr9A9_cH.js";import{C as x}from"./ComposedChart-BG0vFJnc.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CHQnagj8.js";import{L as a}from"./Line-CktBvgGg.js";import{X as c}from"./XAxis-6wdck5XJ.js";import{T as g}from"./Tooltip-CiiLOeCs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DRtBRZ7g.js";import"./CartesianAxis-DWHYepa6.js";import"./Layer-CLMd0CrH.js";import"./resolveDefaultProps-DUbefueE.js";import"./Text-CDbXravB.js";import"./DOMUtils-olWBsR_G.js";import"./isWellBehavedNumber-BFJTu4EN.js";import"./Label-D8rwziA9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CNKQ_WkY.js";import"./index-BiWBdnkZ.js";import"./index-TyDw8B7P.js";import"./types-L0YqXeC-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-nvcrqMwf.js";import"./immer-4i53sgvd.js";import"./RechartsWrapper-BOxkh1KP.js";import"./index-SZXFPM2d.js";import"./index-C5cOlUnK.js";import"./axisSelectors-KbW_RdYB.js";import"./d3-scale-CQIw_skn.js";import"./CartesianChart-CZi0Hd-v.js";import"./chartDataContext-FaAlL944.js";import"./CategoricalChart-DmnISPC2.js";import"./tooltipContext-BQt3eLti.js";import"./AnimatedItems-DrX1vaEn.js";import"./useAnimationId-DJVHCfAF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CaUfvzDJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-8phtwrmk.js";import"./RegisterGraphicalItemId-CDtWnv6Z.js";import"./ErrorBarContext-Cv8g9Tm4.js";import"./GraphicalItemClipPath-ClsDcJaX.js";import"./SetGraphicalItem-HY1vpJNM.js";import"./getZIndexFromUnknown-BV3SonT0.js";import"./graphicalItemSelectors-D2YdDHOs.js";import"./Curve-Sg8XUuU0.js";import"./step-DyxZJeHE.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DaZDHHOd.js";import"./Dot-B7iUah-Z.js";import"./getRadiusAndStrokeWidthFromDot-UiXMR6RM.js";import"./useElementOffset-B0pep8Bt.js";import"./uniqBy-DfSS1ssL.js";import"./iteratee-tTd3ivbf.js";import"./Cross-DFz5-w3s.js";import"./Sector-CthNfgJi.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
