import{R as t}from"./iframe-Dt9aG847.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-AwRjL7js.js";import{R as l}from"./zIndexSlice-C3sOwbsK.js";import{C as x}from"./ComposedChart-CpvmmgfC.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D3CcsYoq.js";import{L as a}from"./Line-CQGFi5Sl.js";import{X as c}from"./XAxis-ChVo-6Tw.js";import{T as g}from"./Tooltip-nmjqd8OH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-0OpL57DR.js";import"./Text-6YRDeSKh.js";import"./resolveDefaultProps-Cnn2TL20.js";import"./DOMUtils-DacRhvVS.js";import"./ZIndexLayer-D4w_arr1.js";import"./index-Ckb0wJr8.js";import"./index-ZaO1fpAq.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BE-JLCIi.js";import"./throttle-DjDKvtka.js";import"./axisSelectors-Bm-O_fE3.js";import"./d3-scale-DLGbz4xh.js";import"./CartesianAxis-DnXkFBgJ.js";import"./Layer-Z8zmzF48.js";import"./types-CAYyOejn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CiUiD4jz.js";import"./index-DaFKSt3L.js";import"./index-C7FBrTyJ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CgsNUza7.js";import"./index-Cy9hP7c-.js";import"./fillDefinitions-Cturf6E_.js";import"./CartesianChart-ZS3wTvyi.js";import"./ZIndexPortal-C6GfDihg.js";import"./CategoricalChart-CcRrPC5A.js";import"./LabelList-Dmjy57ut.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DDhWHAzv.js";import"./useAnimationId-CJa-E4MR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BCHVEK9a.js";import"./tooltipContext-UvrNDSbW.js";import"./dataEntryStyles-V0ugCGFO.js";import"./ErrorBarContext-BlC639ix.js";import"./activeStyles-D2EMNXIV.js";import"./SetGraphicalItem-KzVnPo4P.js";import"./getZIndexFromUnknown-Cls4SazI.js";import"./useEffectiveDataKey-DvT2OXI-.js";import"./omit-DQn6Z1Av.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BqouQalk.js";import"./step-J3DdjOPx.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Djx8G9q2.js";import"./Dot-B7i9JEY2.js";import"./Symbols-VXtPO39-.js";import"./symbol-6_lKArhi.js";import"./getRadiusAndStrokeWidthFromDot-BIO0J0B_.js";import"./useElementOffset-2orHetLh.js";import"./uniqBy-BigEltI1.js";import"./iteratee-CIF51Rnw.js";import"./Cross-R3GIONbF.js";import"./Sector-BNez6OaP.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
