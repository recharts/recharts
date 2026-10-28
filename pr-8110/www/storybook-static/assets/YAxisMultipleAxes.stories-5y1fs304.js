import{R as t}from"./iframe-Diz1MxK0.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-wJW4f648.js";import{R as l}from"./zIndexSlice-De03ARmf.js";import{C as x}from"./ComposedChart-OhuMczYf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-2e4V2D-5.js";import{L as a}from"./Line-Bw4KMoLA.js";import{X as c}from"./XAxis-o44om-aN.js";import{T as g}from"./Tooltip-CBXupBXG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BN-_qB9f.js";import"./Text-Cd2gwijp.js";import"./resolveDefaultProps-DXx0w5ol.js";import"./DOMUtils-CLoOggbb.js";import"./ZIndexLayer-DarFSaif.js";import"./index-BRB5AgXV.js";import"./index-BLbVat5F.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bv8wAAst.js";import"./throttle-D6Fnchfm.js";import"./axisSelectors-DSSqtEqI.js";import"./d3-scale-DzLjpFUT.js";import"./CartesianAxis-g7INsdPw.js";import"./Layer-Bs_jv2-i.js";import"./types-DOhta01o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BDuqmjwG.js";import"./index-F_sHq6h9.js";import"./index-B9EOw7DU.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Dua8Yzn2.js";import"./index-B5mD0-P8.js";import"./CartesianChart-DgKauYA5.js";import"./ZIndexPortal-DkIbXTbh.js";import"./CategoricalChart-BQk2mTyl.js";import"./LabelList-UNOP6jku.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ibll1vv0.js";import"./useAnimationId-DrJNkikT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-lZsBLYLZ.js";import"./tooltipContext-PDMqvzZw.js";import"./dataEntryStyles-D0onuRNm.js";import"./ErrorBarContext-8rAmb_-m.js";import"./activeStyles-DMKa5gXh.js";import"./SetGraphicalItem-R77n_H2E.js";import"./getZIndexFromUnknown-dpuuSD77.js";import"./useEffectiveDataKey-CP6w9Jk7.js";import"./FillDefinition-CPr5Eo8P.js";import"./omit-BtmCaYu8.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DjbP1tEr.js";import"./step-BTIR3rT6.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CsnFafYW.js";import"./Dot-BJelZ-T3.js";import"./Symbols-wvGU_BGG.js";import"./symbol-DdzwEmp4.js";import"./getRadiusAndStrokeWidthFromDot-CVdmuuRJ.js";import"./useElementOffset-DwoWFN5w.js";import"./uniqBy-BQH3eG4y.js";import"./iteratee-D_QiXIJe.js";import"./Cross-CJz9Q9v7.js";import"./Sector-BC22SmBD.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
