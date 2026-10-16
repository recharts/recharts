import{R as t}from"./iframe-CXO7LpG4.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DOeYdqQk.js";import{R as l}from"./zIndexSlice-DfFYBEeE.js";import{C as x}from"./ComposedChart-CX86GF1x.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bvf-m3_A.js";import{L as a}from"./Line-CZ0CBwDd.js";import{X as c}from"./XAxis-BMVFXruj.js";import{T as g}from"./Tooltip-xGIgtC3h.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CPCjl1xH.js";import"./Text-CQgXuSK-.js";import"./resolveDefaultProps-C5dcOo8R.js";import"./pageBackground-C22aj54-.js";import"./isWellBehavedNumber-Xxh63OZA.js";import"./useId-CFkdxUsD.js";import"./useBackwardsCompatibleTheme-Cgf-vIhj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8oHJlBan.js";import"./index-C7BEDOmI.js";import"./index-dHCi8WFp.js";import"./axisSelectors-PR70UCKy.js";import"./throttle-DaNNjE4n.js";import"./d3-scale-DchtYoFX.js";import"./CartesianAxis-C3NdPzIM.js";import"./Layer-D31-Hvub.js";import"./types-B806ejcH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DvrMDUgG.js";import"./index-BmGLfy3v.js";import"./index-D_a3nOcX.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-sOQIHtEN.js";import"./index-C9lYrgEX.js";import"./CartesianChart-Cr8OfXtw.js";import"./chartDataContext-DJlEdu52.js";import"./CategoricalChart-Du8kaQ2V.js";import"./activeStyles-BJ4YqvBn.js";import"./useAnimationId-BbnDDjkN.js";import"./dataEntryStyles-VHSSmKTo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CsIBLxAK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B5MsqJFC.js";import"./tooltipContext-CDKuN4Ar.js";import"./ErrorBarContext-DEed49-o.js";import"./GraphicalItemClipPath-Bdz9TeZ1.js";import"./SetGraphicalItem-DftB5RCs.js";import"./getZIndexFromUnknown-DjNA_0e7.js";import"./useEffectiveDataKey-B0ZkPejj.js";import"./Curve-B0_ANcrk.js";import"./step-4HDWVyZ1.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D48l0kHu.js";import"./Dot-zqLpNykC.js";import"./getRadiusAndStrokeWidthFromDot-CRQLZCgz.js";import"./useElementOffset-BfmKGhNj.js";import"./uniqBy-CnxfY6gQ.js";import"./iteratee-DH4OJnDe.js";import"./Cross-C8Mo-H_X.js";import"./Sector-CMS8t1ZW.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
