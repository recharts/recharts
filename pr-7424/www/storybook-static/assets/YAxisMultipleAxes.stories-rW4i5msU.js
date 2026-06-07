import{R as t}from"./iframe-BqYy1R0H.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BqslSc7g.js";import{R as l}from"./zIndexSlice-V534Dm1F.js";import{C as x}from"./ComposedChart-CrNF5qca.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D5w-WxSe.js";import{L as a}from"./Line-B-irt6PV.js";import{X as c}from"./XAxis-BqSBdy-L.js";import{T as g}from"./Tooltip-CKKNj2xq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BmpbLRXi.js";import"./CartesianAxis-x5MMDJHG.js";import"./Layer-FvXx8y_M.js";import"./resolveDefaultProps-DF5EmNm0.js";import"./Text-Bb7f-h23.js";import"./DOMUtils-BM94Xuwo.js";import"./isWellBehavedNumber-Bh7WW-St.js";import"./Label-NYQMjqVT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-COarhLNo.js";import"./index-aB2rylH4.js";import"./index-C5sdWpfd.js";import"./types-CKi3J98u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DUFmYLd3.js";import"./immer-Bl4OFMGN.js";import"./RechartsWrapper-Cr-pgoDs.js";import"./index-Bep5EplS.js";import"./index--UqKWgbM.js";import"./axisSelectors-B5gEtu2k.js";import"./d3-scale-x-g3_XS_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-nuuk7Fog.js";import"./chartDataContext-Cg_GXcDk.js";import"./CategoricalChart-DKKEuBf1.js";import"./tooltipContext-uH5PM2pv.js";import"./AnimatedItems-BbE46Kp8.js";import"./useAnimationId-BGeq3Yxk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BCODqy_s.js";import"./ActiveShapeUtils--vnzUd2H.js";import"./RegisterGraphicalItemId-CLltNWrh.js";import"./ErrorBarContext-DTNv6sWg.js";import"./GraphicalItemClipPath-CsvgNQl2.js";import"./SetGraphicalItem-CBYRQcWu.js";import"./getZIndexFromUnknown-DHm3ws9y.js";import"./graphicalItemSelectors-HgSZHTXM.js";import"./Curve-CjCX_hKZ.js";import"./step-eDccUZNe.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CUtjERgT.js";import"./Dot-CRjCuWT2.js";import"./getRadiusAndStrokeWidthFromDot-C-NmK4oc.js";import"./useElementOffset-ChEgaNUP.js";import"./uniqBy-CaGUEiLV.js";import"./iteratee-QgNCt4oW.js";import"./Cross-BuLADaE1.js";import"./Sector-D7k5-18d.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
