import{R as e}from"./iframe-AkXMTiN1.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-pJLX02b7.js";import{R as h}from"./zIndexSlice-D2IbpIG9.js";import{C as g}from"./ComposedChart-CbcedsfM.js";import{L as x}from"./Line-bSxVFdvW.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-uKys2Prv.js";import{T as V}from"./Tooltip-Dz6gQDMj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-hfJl8nDX.js";import"./CartesianAxis-nu48EpeM.js";import"./Layer-BbfEqMjd.js";import"./resolveDefaultProps-Cb6CyAiD.js";import"./Text-B8TabNrv.js";import"./DOMUtils-tdyvfO_t.js";import"./isWellBehavedNumber-BjHph-L0.js";import"./Label-yi6vcZhu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-2Zb-HEnP.js";import"./index-DO9nmyvc.js";import"./index-B7ESZsek.js";import"./types-eY1LNeEN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CIoFYl-j.js";import"./immer-CGdqiLEl.js";import"./RechartsWrapper-BFfZ1OV4.js";import"./index-Dvk2Reae.js";import"./index-cd3KTdjN.js";import"./axisSelectors-DNRIweDw.js";import"./CartesianChart-DuevVog_.js";import"./chartDataContext-krnp3gzW.js";import"./CategoricalChart-Bbv_9Kq1.js";import"./Curve-DjnTfF-s.js";import"./step-Du2Dxzc7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DMUwO7tR.js";import"./useAnimationId-DnVrzYZK.js";import"./string-B6fdYHAA.js";import"./ActivePoints-CsE5DRnu.js";import"./Dot-CXwe2hvn.js";import"./RegisterGraphicalItemId-GDKh1K9_.js";import"./ErrorBarContext-DPoGAGab.js";import"./GraphicalItemClipPath-D9xbA8oG.js";import"./SetGraphicalItem-D-MN-a76.js";import"./getRadiusAndStrokeWidthFromDot-CXAjyQPs.js";import"./ActiveShapeUtils-cQX6UbLq.js";import"./useElementOffset-B-pwvrhw.js";import"./uniqBy-BLFid8pB.js";import"./iteratee-oc6mos4-.js";import"./Cross-BfpsE6cl.js";import"./Rectangle-C1CG4rUt.js";import"./Sector-CKPBKjPP.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
