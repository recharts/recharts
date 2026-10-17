import{R as t}from"./iframe-C55y8OzM.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DGa7nV3z.js";import{R as l}from"./zIndexSlice-mi5wuovt.js";import{C as x}from"./ComposedChart-DsJNQyNb.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DkhpMUyg.js";import{L as a}from"./Line-DWmuFfd6.js";import{X as c}from"./XAxis-BhP0mslG.js";import{T as g}from"./Tooltip-B9P8hqEd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BceBwSRN.js";import"./Text-BSBFwZ1P.js";import"./resolveDefaultProps-Cgrl3e7D.js";import"./pageBackground-D6U7S1qf.js";import"./isWellBehavedNumber-mxdqJrTq.js";import"./useId-XdK2U0Ar.js";import"./useBackwardsCompatibleTheme-B8dADBlT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BdI7uft_.js";import"./index-B1erB4OF.js";import"./index-Bbw2aGRN.js";import"./axisSelectors-DyDkozWt.js";import"./throttle-zPKptILV.js";import"./d3-scale-CwLPJ1sG.js";import"./CartesianAxis-UMkVq4pL.js";import"./Layer-D0VzgPFA.js";import"./types-BjarwEzr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BczpgcuJ.js";import"./index-kqQD3Gpu.js";import"./index-DnfvrK_t.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DsEVXtD9.js";import"./index-Dykf-EVS.js";import"./CartesianChart-HAuDRHmx.js";import"./chartDataContext-DnaKmrEK.js";import"./CategoricalChart-BdM0esTK.js";import"./activeStyles-DVnALFej.js";import"./useAnimationId-4Vo2vEHF.js";import"./dataEntryStyles-Cic1JpuQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-kX1A_stc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-7zk5n9mh.js";import"./tooltipContext-CA6M0awf.js";import"./ErrorBarContext-DIbssQ08.js";import"./GraphicalItemClipPath-BHQAz3ae.js";import"./SetGraphicalItem-PlWMyb2e.js";import"./getZIndexFromUnknown-Cj3V-2_L.js";import"./useEffectiveDataKey-BY6K7cit.js";import"./Curve-B6Vmc8K0.js";import"./step-CWyhxLD0.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B8YNryID.js";import"./Dot-Co-mG1jW.js";import"./getRadiusAndStrokeWidthFromDot-D-jKdLSh.js";import"./useElementOffset--zSzp9Ca.js";import"./uniqBy-Cvg7I5_E.js";import"./iteratee-B67uZlwB.js";import"./Cross-DAUM0A69.js";import"./Sector-CFXFrO2G.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
