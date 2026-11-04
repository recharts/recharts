import{R as e}from"./iframe-Dpjo95BT.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-BTXqWGnk.js";import{R as h}from"./zIndexSlice-Bz9FHg4X.js";import{C as g}from"./ComposedChart-BechDuQ5.js";import{L as x}from"./Line-CKn7Dq4x.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-C6Aj8r2L.js";import{T as V}from"./Tooltip-_jWWEhGs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-BKOwU02Z.js";import"./Layer-dEC3lxZB.js";import"./resolveDefaultProps-C9kA-MT8.js";import"./Text-8qrIJHOF.js";import"./DOMUtils-DrYchlqm.js";import"./ZIndexLayer-CS37SN-4.js";import"./index-LdQYXtG7.js";import"./index-B9X1zGtL.js";import"./Label-DulCRYKX.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DlnF8AFa.js";import"./throttle-CgrRaOJs.js";import"./types-CB3DqoLS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DCa6WqoI.js";import"./index-B-kkbwvl.js";import"./index-CQjokYOg.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DSxvh8IJ.js";import"./RechartsWrapper-BpzLbtwc.js";import"./index-_bw4WA6x.js";import"./fillDefinitions-puythMDx.js";import"./CartesianChart-D0GXIpob.js";import"./ZIndexPortal-1jnT8grk.js";import"./CategoricalChart-EHcc8AGs.js";import"./Curve-DESeTImr.js";import"./step-CnW6P3zf.js";import"./path-DyVhHtw_.js";import"./LabelList-DJoHLEEy.js";import"./ActivePoints-CqWN2Rf1.js";import"./Dot-CyMu6wKR.js";import"./activeStyles-lY2Wk3Pa.js";import"./useAnimationId-DXZwJd8h.js";import"./dataEntryStyles-0BlaoxRC.js";import"./Symbols-DoRtyuXb.js";import"./symbol-WOMD01oz.js";import"./ErrorBarContext-zCJLcJsR.js";import"./SetGraphicalItem-BBgSrgVm.js";import"./getRadiusAndStrokeWidthFromDot-BbnzhDU0.js";import"./ActiveShapeUtils-DlizSa8y.js";import"./useEffectiveDataKey-DYwpBPAM.js";import"./useElementOffset-DDmleafX.js";import"./uniqBy-C9-llrOR.js";import"./iteratee-CNDxe9py.js";import"./isArguments-yB-y1yaH.js";import"./Cross-8DFI0rn1.js";import"./Rectangle-C3bNmSLU.js";import"./util-Dxo8gN5i.js";import"./Sector-JUb9w246.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
