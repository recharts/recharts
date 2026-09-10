import{R as t}from"./iframe-Cuw567ao.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CbSfE1QD.js";import{R as l}from"./zIndexSlice-BuAoIKSs.js";import{C as x}from"./ComposedChart-Qred9gjF.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-cFy0R7Np.js";import{L as a}from"./Line-DlwGtjpP.js";import{X as c}from"./XAxis-CFLpq8b6.js";import{T as g}from"./Tooltip-Cptx_Upa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BJjrjkoL.js";import"./Text-DEJPj4XQ.js";import"./resolveDefaultProps-EeLa_nJM.js";import"./DOMUtils-mjR2JQA6.js";import"./isWellBehavedNumber-B73u9WX2.js";import"./useId-JkOEL8Mu.js";import"./useBackwardsCompatibleTheme-CpTahyhZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-b9cpcpRU.js";import"./index-DPZE1hYp.js";import"./index-CitLG62V.js";import"./RechartsWrapper-Dc_lFngx.js";import"./axisSelectors-C6YnqdB_.js";import"./throttle-Bjmeh804.js";import"./d3-scale-sEI--FZR.js";import"./index-DSKcUbNG.js";import"./index-1-Kpwwt_.js";import"./renderedTicksSlice-DdMSNSAt.js";import"./index-CYPd_aD4.js";import"./CartesianAxis-D-JaI_zt.js";import"./Layer-T72FoYEi.js";import"./types-BooOBCdC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D-_oA4AU.js";import"./chartDataContext-CU7BnpPX.js";import"./CategoricalChart-BLUN9mEz.js";import"./AnimatedItems-B1juRf7B.js";import"./useAnimationId-7XVM7nxW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DCUZMkY0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-P98ujLW0.js";import"./tooltipContext-JHMIN8eF.js";import"./RegisterGraphicalItemId-COeScAua.js";import"./ErrorBarContext-DsK39YKv.js";import"./GraphicalItemClipPath-DroKw-TI.js";import"./SetGraphicalItem--pdnWjmL.js";import"./getZIndexFromUnknown-ErE1ru6P.js";import"./useGraphicalItemIdentity-DXn-ONdl.js";import"./Curve-DpAcFiD4.js";import"./step-oaTKbJ5-.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DUj5MP15.js";import"./Dot-DhnV0obD.js";import"./getRadiusAndStrokeWidthFromDot-D9Yg2xkO.js";import"./useElementOffset-DmR9p-uX.js";import"./uniqBy-CsdKAqlX.js";import"./iteratee-B0sRemCe.js";import"./Cross-DNmypU88.js";import"./Sector-C8gb8Py2.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
