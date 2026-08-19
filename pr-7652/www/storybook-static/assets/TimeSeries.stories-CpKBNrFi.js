import{R as e}from"./iframe-CgwPoQay.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DOtySNzv.js";import{R as h}from"./zIndexSlice-Cwvky78x.js";import{C as g}from"./ComposedChart-Co7sgDaS.js";import{L as x}from"./Line-CMHOXWP-.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DtIIfQy7.js";import{T as V}from"./Tooltip-E-dUB5_J.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-DLTPH4hp.js";import"./Layer-DjRO5iA4.js";import"./resolveDefaultProps-CD_cqqva.js";import"./Text-DLEzBygV.js";import"./DOMUtils-DewFbXuK.js";import"./isWellBehavedNumber-CfD7xUgW.js";import"./useBackwardsCompatibleTheme-CY8sdwmg.js";import"./Label-CwBi1oPN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BiLuwpYl.js";import"./index-CNkBm-lM.js";import"./index-CM8NzWzV.js";import"./types-D2pCS11Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BmzsuTjh.js";import"./throttle-sMY3RlhH.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DoOmmi72.js";import"./index-BgE4sbhX.js";import"./index-CvpagMBh.js";import"./axisSelectors-D5ccOzPk.js";import"./CartesianChart-CcUm8bov.js";import"./chartDataContext-3T-WNdut.js";import"./CategoricalChart-O1QH-Owv.js";import"./Curve-a8euvDpU.js";import"./step-DTTmkP9p.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-9ERF5uBB.js";import"./useAnimationId-C35lEnnz.js";import"./ActivePoints-CCBXRjBa.js";import"./Dot-DB8vVey7.js";import"./RegisterGraphicalItemId-AM6jbCCW.js";import"./ErrorBarContext-6qbGOpK0.js";import"./GraphicalItemClipPath-M1v6x7Pp.js";import"./SetGraphicalItem-Cz63GpQf.js";import"./getRadiusAndStrokeWidthFromDot-2t6d-1jI.js";import"./ActiveShapeUtils-CYWv9Vsk.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-BVRfxINV.js";import"./uniqBy-Du-asTiq.js";import"./iteratee-BR7CkU_G.js";import"./Cross-DkBXGZuy.js";import"./Rectangle-DIlOeeWH.js";import"./util-Dxo8gN5i.js";import"./Sector-CWQKTn9v.js";const Ht={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const It=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,It as __namedExportsOrder,Ht as default};
