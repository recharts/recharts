import{R as t}from"./iframe-BVlfuHR1.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DKBlzg_K.js";import{B as p}from"./BarChart-B0FJxTKQ.js";import{X as l}from"./XAxis-DixivmhH.js";import{Y as h}from"./YAxis-4InIcFXf.js";import{B as x}from"./Brush-BDLt-8g_.js";import{B as c}from"./Bar-BEGwmIxN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-2dAZYWIG.js";import"./throttle-B2Qtjc3W.js";import"./index-BQP9-3uy.js";import"./index-Y_wwfQb4.js";import"./RechartsWrapper-DRZJzitw.js";import"./axisSelectors-Brqs7zw9.js";import"./polarAxisSelectors-DnZiXFIF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BNlCtWSy.js";import"./index-DNy-3Gid.js";import"./index-DZEpaPFi.js";import"./renderedTicksSlice-CoA4ci_o.js";import"./index-CCVms-fF.js";import"./CartesianChart-ZoKsxEgh.js";import"./ZIndexPortal-DaL6GVrS.js";import"./CategoricalChart-DD3gjEAO.js";import"./CartesianAxis-CPYLIIET.js";import"./Layer-B5eXi8NV.js";import"./Text-BxId80OJ.js";import"./DOMUtils-Dtel_m_3.js";import"./ZIndexLayer-6Z0WH24s.js";import"./Label-Ckax5Juk.js";import"./types-DYWAvxYY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-qAsFJxAr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-zs3F46mh.js";import"./useAnimationId-eAQDadKJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--AsRwBXZ.js";import"./tooltipContext-C85XqxZL.js";import"./dataEntryStyles-DSEQ0COb.js";import"./ErrorBarContext-DAUTVb2k.js";import"./activeStyles-B82PQSZb.js";import"./SetGraphicalItem-Cncgk9Qh.js";import"./getZIndexFromUnknown-DlaXSOxm.js";import"./useEffectiveDataKey-BtHFWZML.js";import"./fillDefinitions-B4sFAt8T.js";import"./omit-DgaV2i7I.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
