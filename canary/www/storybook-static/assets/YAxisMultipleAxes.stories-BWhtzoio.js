import{R as t}from"./iframe-ZxQmCvwy.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B8sk4GXn.js";import{R as l}from"./zIndexSlice-RPdwBP9f.js";import{C as x}from"./ComposedChart-BATf_pxJ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BMW6jvUy.js";import{L as a}from"./Line-BzfmnxQQ.js";import{X as c}from"./XAxis-Bl2tbEmW.js";import{T as g}from"./Tooltip-Ch_z1NOA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-jkryqT5d.js";import"./Text-BO32xjCe.js";import"./resolveDefaultProps-DpipilcU.js";import"./DOMUtils-CnJnyfSI.js";import"./isWellBehavedNumber-sAavL0dG.js";import"./useId-CDbRoZtb.js";import"./useBackwardsCompatibleTheme-rwc4Ui1J.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CHR5usSt.js";import"./index-BPMVDNb6.js";import"./index-BDLiH1an.js";import"./RechartsWrapper-BdNFCoW6.js";import"./axisSelectors-BWbFpFtg.js";import"./throttle-DmwvZWHb.js";import"./d3-scale-CzTTxW2Z.js";import"./index-BWm52sKa.js";import"./index-BS98XUV2.js";import"./renderedTicksSlice-BYZOrskl.js";import"./index-CABC13wD.js";import"./CartesianAxis-D6DZF6-J.js";import"./Layer-B0D5UKjQ.js";import"./types-CAEm0sG6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-SPk4tXhy.js";import"./chartDataContext-DINqA_zr.js";import"./CategoricalChart-CFCUhC_p.js";import"./AnimatedItems-DNQqwiG9.js";import"./useAnimationId-BzN7QWtj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BYMvNR2N.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_YMBjW3.js";import"./tooltipContext-DQF_zLK8.js";import"./RegisterGraphicalItemId-TiGOVH9L.js";import"./ErrorBarContext-DUW_9KGf.js";import"./GraphicalItemClipPath-BQlyOKfz.js";import"./SetGraphicalItem-BoNO2rRn.js";import"./getZIndexFromUnknown-B5G40tR6.js";import"./useGraphicalItemIdentity-BCt8bdV6.js";import"./Curve-Bnqw1l-2.js";import"./step-BZUQ-l0Y.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CZGIVnLi.js";import"./Dot-D5ITAbBb.js";import"./getRadiusAndStrokeWidthFromDot-DYQBE5cH.js";import"./useElementOffset-CWsrqzYy.js";import"./uniqBy-Blp6aEMv.js";import"./iteratee-C4SJTDea.js";import"./Cross-DpbwQXpR.js";import"./Sector-CUdfplpR.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
